import projectsInfo from './assets/script/projects.js';
import code from './assets/script/code.js'
import projectItem from './assets/script/projectItem.js'

const projectContainer = document.querySelector('.projects__container');
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('nav');
const menuLinks = document.querySelectorAll('.header__link');
const projectInfo = document.querySelector('.projects__desctription');
const infoWrapper = document.querySelector('.projects__desc-wrapper');
const closeInfo = document.querySelector('.projects__close-info');
const shadow = document.querySelector('.shadow');

const projects = [];
const projectCards = [];

const hideInfoAboutProject = (e) => {
  projectInfo.classList.remove('open');
  shadow.classList.remove('open');
  document.body.style.overflowY = 'auto';
}

closeInfo.addEventListener('click', hideInfoAboutProject);
shadow.addEventListener('click', hideInfoAboutProject);

function fillProjectContainer() {
  projectsInfo.forEach(el => {
    const project = new projectItem(el);
    const projectCard = project.renderItemCard()
    projects.push(project);
    projectCards.push(projectCard);
    projectContainer.append(projectCard);
  })
}
fillProjectContainer();

const showInfoAboutProject = (e) => {
  console.log(projectInfo);
  const project = projects.filter((el) => e.currentTarget.id === el.item.name)[0];
  infoWrapper.innerHTML = '';
  infoWrapper.append(project.info);
  projectInfo.classList.add('open');
  shadow.classList.add('open');
  document.body.style.overflowY = 'hidden';
}


projectCards.forEach((el) => el.addEventListener('click', showInfoAboutProject));

[...menuLinks, burger].forEach(el => el.addEventListener('click', () => {
  toggleBurgerMenu();
}))
function toggleBurgerMenu() {
  [burger, headerMenu].forEach(el => el.classList.toggle('open'));
}
const codeButton = document.querySelectorAll('.code__button');
const codeArea = document.querySelector('.code__area');
codeButton.forEach(el => el.addEventListener('click', (e) => {
  document.querySelector('.code__button-active').classList.remove('code__button-active');
  e.target.classList.add('code__button-active');
  fillCodeArea(e.target.id);
}))

function fillCodeArea(n) {
  codeArea.innerHTML = code[n];
}
