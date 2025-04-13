let isLoggedIn = false;
let wishlist = [];

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const hearts = document.querySelectorAll(".heart");
const goWishlistBtn = document.getElementById("goWishlist");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

function updateHeartIcons() {
  hearts.forEach(heart => {
    const id = heart.dataset.id;
    heart.classList.toggle("active", wishlist.includes(id));
  });
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function loadWishlist() {
  wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  updateHeartIcons();
}

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    if (!isLoggedIn) {
      showToast("Əvvəlcə daxil olun!");
      return;
    }

    const id = heart.dataset.id;
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter(item => item !== id);
    } else {
      wishlist.push(id);
    }

    updateHeartIcons();
    saveWishlist();
  });
});

loginBtn.addEventListener("click", () => {
  isLoggedIn = true;
  loadWishlist();
  showToast("daxil oldunuz");
});

logoutBtn.addEventListener("click", () => {
  isLoggedIn = false;
  wishlist = [];
  localStorage.removeItem("wishlist");
  updateHeartIcons();
  showToast("cixis etdiniz artiq wishlist temizdir");
});

goWishlistBtn.addEventListener("click", () => {
  if (!isLoggedIn) {
    showToast("Wishliste baxmaq ucun giris edin");
  } else {
    alert("Wishlistdeki mehsullar: " + (wishlist.length ? wishlist.join(", ") : "Boşdur"));
  }
});

loadWishlist();
