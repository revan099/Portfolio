let todos = [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let li = document.createElement("li");
    li.innerHTML = `${i + 1}) `;

    let span = document.createElement("span");
    span.innerText = todo.text;
    span.className = todo.done ? "done" : "not-done";
    li.appendChild(span);

    let markBtn = document.createElement("button");
    markBtn.innerText = "okey";
    markBtn.onclick = function () {
      todo.done = !todo.done;
      renderTodos();
    };
    li.appendChild(markBtn);

    if (!todo.done) {
      let editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.onclick = function () {
        let newText = prompt("teze metin daxil edin:", todo.text);
        if (newText !== null && newText.trim() !== "") {
          todo.text = newText.trim();
          renderTodos();
        }
      };
      li.appendChild(editBtn);
    }

    if (todo.done) {
      let delBtn = document.createElement("button");
      delBtn.innerText = "Sil";
      delBtn.onclick = function () {
        todos.splice(i, 1);
        renderTodos();
      };
      li.appendChild(delBtn);
    }

    list.appendChild(li);
  }
}

function addTodo() {
  let input = document.getElementById("todoInput");
  let text = input.value.trim();

  if (text === "") {
    alert("bos ola bilmez");
    return;
  }

  todos.push({ text: text, done: false });
  input.value = "";
  renderTodos();
}

function clearAll() {
  if (confirm("hamisi silinsin?")) {
    todos = [];
    renderTodos();
  }
}
