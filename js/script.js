// Sticky header shadow
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
menuBtn.addEventListener("click", () => navbar.classList.toggle("active"));
navbar.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => navbar.classList.remove("active"))
);

// Dark mode (remembered between visits when the browser allows it)
const themeBtn = document.getElementById("theme-btn");
function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeBtn.textContent = dark ? "☀" : "☾";
}
try {
  setTheme(localStorage.getItem("theme") === "dark");
} catch (e) {}
themeBtn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  setTheme(dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch (e) {}
});
