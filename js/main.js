// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  this.reset();
});

function toggleContactCard() {
  const popup = document.getElementById("contactPopup");
  const cardContent = popup.querySelector(".gradient-border");

  if (popup.classList.contains("hidden")) {
    popup.classList.remove("hidden");
    cardContent.classList.remove("popup-exit");
    cardContent.classList.add("popup-enter");
  } else {
    cardContent.classList.remove("popup-enter");
    cardContent.classList.add("popup-exit");
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 200);
  }
}

function closeIfClickedOutside(event) {
  if (event.target === event.currentTarget) {
    toggleContactCard();
  }
}

// Close on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const popup = document.getElementById("contactPopup");
    if (!popup.classList.contains("hidden")) {
      toggleContactCard();
    }
  }
});
