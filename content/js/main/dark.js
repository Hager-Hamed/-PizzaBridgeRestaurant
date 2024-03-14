const switchInput = window.document.querySelector(".switch__input");
const themeText = window.document.querySelector(".theme__text");
const themeIcon = window.document.querySelector(".theme__icon");
console.log(switchInput);

const currentTheme = getThemeFromLocalStorage() || "light";
setTheme(currentTheme);

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (theme === "dark") {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    switchInput.checked = true;
  } else {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    switchInput.checked = false;
  }

  setThemeFromLocalStorage(theme);
}

function getThemeFromLocalStorage() {
  return window.localStorage.getItem("theme");
}

function setThemeFromLocalStorage(theme) {
  window.localStorage.setItem("theme", theme);
}

switchInput.addEventListener("change", (e) => {
  if (switchInput.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
});
