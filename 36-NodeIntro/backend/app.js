import express from "express";
import fs from "fs";
import { resolve } from "path";

const app = express();
const PORT = 3000;
app.use(express.json());

const DB_FILE = resolve("db.json");

function loadData() {
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
}

function saveData(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
}

app.get("/students", (req, res) => {
  const students = loadData();
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const students = loadData();
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ message: "tapilmadi" });
  }

  res.json(student);
});

app.post("/students", (req, res) => {
  const students = loadData();
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  saveData(students);

  res.status(201).json({ message: "Elave olundu", item: newStudent });
});

app.delete("/students/:id", (req, res) => {
  const studentId = +req.params.id;
  const students = loadData();
  const updatedList = students.filter((s) => s.id !== studentId);

  saveData(updatedList);
  res.json({ message: `ID ${studentId} silindi.` });
});

app.put("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const students = loadData();
  const idx = students.findIndex((s) => s.id === studentId);

  if (idx < 0) {
    return res.status(404).json({ message: "Obyekt tapilmadi" });
  }

  students[idx] = { id: studentId, ...req.body };
  saveData(students);
  res.json({ message: `ID ${studentId} yenilendi.`, item: students[idx] });
});

app.patch("/students/:id", (req, res) => {
  const studentId = +req.params.id;
  const students = loadData();
  const idx = students.findIndex((s) => s.id === studentId);

  if (idx === -1) {
    return res.status(404).json({ message: "Obyekt tapilmadi" });
  }

  students[idx] = { ...students[idx], ...req.body };
  saveData(students);
  res.json({ message: `ID ${studentId} yeniledi`, item: students[idx] });
});

app.listen(PORT, () => {
  console.log(`Server işə düşdü: http://localhost:${PORT}`);
});
