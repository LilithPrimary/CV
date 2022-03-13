import projects from './assets/script/projects.js';
import code from "./assets/script/code.js"

const projectContainer = document.querySelector(".projects__container");
const burger = document.querySelector(".header__burger");
const headerMenu = document.querySelector("nav");
const menuLinks = document.querySelectorAll(".header__link");

function fillProjectContainer() {
    projects.forEach(el => {
        const item = document.createElement("a");
        item.target= "_blank";
        item.href = el.url;
        item.classList.add("projects__item");
        const img = document.createElement("img");
        img.classList.add("projects__image");
        img.src = el.img;
        const title = document.createElement("span");
        title.classList.add("projects__title");
        title.textContent = el.name;
        item.append(img, title);
        projectContainer.append(item);
    })
}
fillProjectContainer();

[...menuLinks, burger].forEach(el => el.addEventListener("click", () => {
    toggleBurgerMenu();
}))
function toggleBurgerMenu () {
    [burger, headerMenu].forEach(el => el.classList.toggle("open"));
}
const codeButton = document.querySelectorAll(".code__button");
const codeArea = document.querySelector(".code__area");
codeButton.forEach(el => el.addEventListener("click", (e) =>{
    document.querySelector(".code__button-active").classList.remove("code__button-active");
    e.target.classList.add("code__button-active");
    fillCodeArea(e.target.id);
}))

function fillCodeArea(n) {
    codeArea.innerHTML = code[n];
}
