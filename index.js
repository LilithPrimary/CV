import projects from './assets/script/projects.js';

const projectContainer = document.querySelector(".projects__container");

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