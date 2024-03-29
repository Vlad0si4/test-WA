document
  .getElementById("dropdown-link-tours")
  .addEventListener("click", function () {
    document.getElementById("dropdown-content-tours").classList.toggle("show");
  });

document
  .getElementById("dropdown-link-services")
  .addEventListener("click", function () {
    document
      .getElementById("dropdown-content-services")
      .classList.toggle("show");
  });

window.addEventListener("click", function (event) {
  if (
    !event.target.matches("#dropdown-link-tours") &&
    !event.target.matches("#dropdown-link-services")
  ) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
