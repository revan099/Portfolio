let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = regUsername.value.trim();
  const email = regEmail.value.trim();
  const password = regPassword.value;
  const confirmPassword = regConfirmPassword.value;

  // const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,}$/;

  if (!usernameRegex.test(username)) {
    showToast("isdifadeci adi duzgun deyil", "red");
    return;
  }

  if (!emailRegex.test(email)) {
    showToast("emailduzgun deyil", "red");
    return;
  }

  if (!passwordRegex.test(password)) {
    showToast("sifre zeyifdir", "red");
    return;
  }

  if (password !== confirmPassword) {
    showToast("sifreni yeniden tesdiqle", "red");
    return;
  }

  const existing = users.find(u => u.username === username || u.email === email);
  if (existing) {
    showToast("bu isdifadeci adi ve email artiq var", "red");
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  showToast("qeydiyyat ugurludur", "green");
  this.reset();
  updateStrengthIcon(false);
});

document.getElementById('regPassword').addEventListener('input', function() {
  const password = this.value;
  const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,}$/;
  const icon = document.getElementById('passwordStrength');

  if (strong.test(password)) {
    icon.textContent = '✔';
    icon.classList.add('valid');
  } else {
    icon.textContent = '✖';
    icon.classList.remove('valid');
  }
});

function updateStrengthIcon(valid) {
  const icon = document.getElementById('passwordStrength');
  icon.textContent = valid ? '✔' : '✖';
  icon.classList.toggle('valid', valid);
}

function showToast(msg, color) {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "top",
    position: "center",
    style: { background: color },
  }).showToast();
}
