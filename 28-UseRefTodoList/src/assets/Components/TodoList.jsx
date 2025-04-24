import React, { useState } from "react";
import styles from "../css/TodoList.module.css";
import { toast, ToastContainer } from "react-toastify";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return toast.error("Todo bos ola bilmez");
    setTodos([...todos, { text: input, completed: false }]);
    toast.success("Yeni todooo elave edildi");
    setInput("");
    console.log(todos);
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
    toast.info(
      `Todo ${updated[index].completed ? "icra edildi" : "geri qaytarildi"}`
    );
  };

  const editTodo = (index) => {
    const newText = prompt("zehmet olmasa yeni todo metni daxil edin:", todos[index].text);
    if (newText && newText.trim() !== "") {
      const updated = [...todos];
      updated[index].text = newText.trim();
      setTodos(updated);
      toast.success("Todo redacte edildi");
    }
  };

  const deleteAll = () => {
    if (todos.length === 0) return toast.warn("Silinecek bir sey yoxdur");
    setTodos([]);
    toast.success("butun todolar silindi");
  };

  return (
    <div className={styles.todoContainer}>
      <h2>Todo siyahisi</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
          placeholder="Yeni todo yazin..."
        />

        <button onClick={addTodo}>elave et</button>
        <button onClick={deleteAll}>sil</button>
      </div>

      {todos.map((todo, index) => (
        <div
          key={index}
          className={`${styles.todoItem} ${
            todo.completed ? styles.completed : styles.pending
          }`}
        >
          <span>{index + 1}</span>
          <span>{todo.text}</span>
          <div className={styles.buttons}>
            <button onClick={() => toggleComplete(index)}>
              {todo.completed ? "geri al" : "bitti"}
            </button>

            {!todo.completed && (
              <button onClick={() => editTodo(index)}>redakte et</button>
            )}
          </div>
        </div>
      ))}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default TodoList;
