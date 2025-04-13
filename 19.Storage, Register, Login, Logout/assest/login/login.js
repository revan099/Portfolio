let users = JSON.parse(localStorage.getItem("users")) || [];
let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts")) || {};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const identifier = loginUser.value.trim();
  const password = loginPassword.value;
  const now = new Date();


  if (!user || user.password !== password) {
    if (!loginAttempts[identifier]) {
      loginAttempts[identifier] = { count: 1 };
    } else {
      loginAttempts[identifier].count++;
    }


    localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
    return;
  }

  showToast("giris ugurludur", "green");
  loginAttempts[identifier] = null;
  localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
});

function showToast(msg, color) {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "top",
    position: "center",
    style: { background: color },
  }).showToast();
}
