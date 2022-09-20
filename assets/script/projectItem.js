const stopProp = (e) => e.stopPropagation();

class ProjectItem {
  githabLink = document.createElement('a');
  deployLink = document.createElement('a');
  info = document.createElement('span');

  constructor (itemInfo) {
    this.item = itemInfo;
    this.fillElements();
  }

  fillElements() {
    this.githabLink.addEventListener('click', stopProp)
    this.deployLink.addEventListener('click', stopProp)
    this.githabLink.classList.add('projects__link')
    this.deployLink.classList.add('projects__link')
    this.githabLink.target = '_blank';
    this.githabLink.href = this.item.gitUrl;
    this.deployLink.target = '_blank';
    this.deployLink.href = this.item.url;
    const deploy = document.createElement('span');
    deploy.textContent = 'deploy';
    const ghImage = document.createElement('i');
    ghImage.classList.add('fa-brands', 'fa-github');
    this.githabLink.append(ghImage);
    this.deployLink.append(deploy);
    this.info.textContent = this.item.description;
  }

  renderItemCard() {
    const card = document.createElement('div');
    card.id = this.item.name;
    card.classList.add('projects__item');
    const img = document.createElement('img');
    img.classList.add('projects__image');
    img.src = this.item.img;
    const title = document.createElement('span');
    title.classList.add('projects__title');
    title.textContent = this.item.name;
    const linkWrapper = document.createElement('div');
    linkWrapper.classList.add('projects__link-wrapper');
    linkWrapper.append(this.githabLink, this.deployLink);
    card.append(img, title, linkWrapper);
    return card;
  }
}

export default ProjectItem;