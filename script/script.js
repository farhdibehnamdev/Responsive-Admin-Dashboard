"use strict";
const btnLight = document.querySelector(".btnLight");
const btnDark = document.querySelector(".btnDark");
const body = document.querySelector("body");
const headerMenu = document.querySelector(".header__hamburgerMenu");
const sidebar = document.querySelector(".container__sidebar");
const closeMenu = document.querySelector(".sidebar__close");
const themeHandler = function (type) {
  if (type === "light") {
    btnDark.classList.remove("btnDark--Clicked");
    btnLight.classList.add("btnLight--Clicked");
    body.classList.remove("dark");
    body.classList.add("light");
  } else if (type === "dark") {
    btnLight.classList.remove("btnLight--Clicked");
    btnDark.classList.add("btnDark--Clicked");
    body.classList.add("dark");
    body.classList.remove("light");
  }
};

const sidebarHandler = function () {
  sidebar.classList.toggle("open");
};

btnLight.addEventListener("click", () => themeHandler("light"));
btnDark.addEventListener("click", () => themeHandler("dark"));
headerMenu.addEventListener("click", () => sidebarHandler());
closeMenu.addEventListener("click", () => sidebarHandler());
