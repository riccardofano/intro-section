const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav");
const subLists = document.querySelectorAll(".nav__sublist");

navToggle.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true";
  navList.setAttribute("data-active", !expanded);
  this.setAttribute("aria-expanded", !expanded);
});

for (const list of subLists) {
  list.parentElement.addEventListener("click", function (e) {
    if (e.target !== this) return;

    const active = this.getAttribute("data-active") === "true";
    this.setAttribute("data-active", !active);
  });
}
