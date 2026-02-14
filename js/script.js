// Dark/Light mode toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light mode";
  } else {
    toggleBtn.textContent = "Dark mode";
  }
});