(function () {
  const burger = document.querySelector("[data-burger]");
  const year = document.querySelector("[data-year]");

  if (year) year.textContent = new Date().getFullYear();

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
  }

  if (burger) {
    burger.addEventListener("click", () => {
      setMenu(!document.body.classList.contains("menu-open"));
    });
  }

  // Close menu when clicking a mobile link
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-mobile-link]");
    if (link) setMenu(false);
  });

  // Close menu with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
})();
