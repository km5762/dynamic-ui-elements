const dropDownButton = document.querySelector(".dropdown-button");
const dropDownContent = document.querySelector(".dropdown-content");
const dropDownMenu = document.querySelector(".dropdown");

dropDownButton.addEventListener("mouseover", () => {
  dropDownContent.style.display = "flex";
});

dropDownMenu.addEventListener("mouseleave", () => {
  dropDownContent.style.display = "none";
});
