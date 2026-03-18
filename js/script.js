const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const yearSpan = document.getElementById("year");
const budget = document.getElementById("budget");
const budgetValue = document.getElementById("budgetValue");
const contactForm = document.getElementById("contactForm");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (budget && budgetValue) {
  budget.addEventListener("input", () => {
    budgetValue.textContent = budget.value;
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Votre message a bien été envoyé.");
    contactForm.reset();

    if (budgetValue) {
      budgetValue.textContent = "3000";
    }
  });
}