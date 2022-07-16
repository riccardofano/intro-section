const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const subLists = document.querySelectorAll(".nav__sublist");

// Open/Close mobile navbar by clicking on toggle button
navToggle.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true";
  navList.setAttribute("data-active", !expanded);
  this.setAttribute("aria-expanded", !expanded);
});

// Close mobile navbar by clicking outside it
overlay.addEventListener("click", function () {
  navList.setAttribute("data-active", false);
  navToggle.setAttribute("aria-expanded", false);
});

// Open/Close sublist by clicking on the parent li
for (const list of subLists) {
  list.parentElement.addEventListener("click", function (e) {
    if (e.target !== this) return;

    const active = this.getAttribute("data-active") === "true";
    this.setAttribute("data-active", !active);
  });
}
