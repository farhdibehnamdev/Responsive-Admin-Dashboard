"use strict";
const btnLight = document.querySelector(".btnLight");
const btnDark = document.querySelector(".btnDark");
const body = document.querySelector("body");
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

btnLight.addEventListener("click", () => themeHandler("light"));
btnDark.addEventListener("click", () => themeHandler("dark"));
