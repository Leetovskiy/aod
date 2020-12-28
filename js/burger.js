let burgerMenu = document.querySelector('.menu');

let burgerMenuItems = document.querySelectorAll('.menu__item');

let isBurgerOpened;

function switchBurgerState() {
  burgerMenuItems.forEach((item) => {
    if (item.className == 'menu__item menu__item-logo') return;
    item.style.display = (isBurgerOpened) ? 'none' : 'initial';
  });

  isBurgerOpened = !isBurgerOpened;
}

window.addEventListener(`resize`, event => {
  if (window.innerWidth > 600) {
    burgerMenuItems.forEach((item) => {
      item.style.display = 'initial';
    });
  }
}, false);