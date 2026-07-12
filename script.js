// ===============================
// Theme Toggle with Persistence
// ===============================
const toggleThemeBtn = document.getElementById("toggle-theme");

// Apply saved theme on load
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleThemeBtn.textContent = "☀️ Toggle Dark Mode";
}

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");

  toggleThemeBtn.textContent = isLight
    ? "☀️ Toggle Dark Mode"
    : "🌙 Toggle Light Mode";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ===============================
// Smooth Scroll for Navigation Links
// ===============================
const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ===============================
// Button Ripple Effect
// ===============================
const buttons = document.querySelectorAll(".resume-btn, .theme-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.clientX - btn.offsetLeft}px`;
    ripple.style.top = `${e.clientY - btn.offsetTop}px`;
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// ===============================
// Skill Icon Hover Animation
// ===============================
const skillIcons = document.querySelectorAll(".skills-list li i");

skillIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "transform 0.3s ease";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});
