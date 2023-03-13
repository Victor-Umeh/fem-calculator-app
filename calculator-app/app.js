"use strict";
const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const delBtn = document.querySelector(".del");
const resetBtn = document.querySelector(".reset");
const evalBtn = document.querySelector(".eval");
const themeSlider = document.querySelector(".slider");

//BUTTONS AND SCREEN_OUTPUT
btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    const value = e.target.textContent;
    screen.value += value;
  });
});

//DELETE BTN
delBtn.addEventListener("click", () => {
  const value = screen.value.split("");
  value.pop();
  screen.value = value.join("");
});

//RESET BTN
resetBtn.addEventListener("click", () => {
  screen.value = null;
});

//EVAL BTN
evalBtn.addEventListener("click", () => {
  if (screen.value) {
    screen.value = eval(screen.value);
  } else {
    screen.value = 0;
  }
});

// THEME TOGGLE
themeSlider.addEventListener("click", () => {
  const rootEl = document.documentElement;
  let dataAttr = rootEl.getAttribute("data-theme"),
    switchTheme;

  switchTheme = dataAttr === "accent-1" ? "accent-2" : "accent-1";
  rootEl.setAttribute("data-theme", switchTheme);
});
