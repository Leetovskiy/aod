let burgerButton = document.querySelector('.menu__burger-btn');
let navigation = document.querySelector('.menu__navigation');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('menu__burger-btn_active');
  navigation.classList.toggle('menu__navigation_shown');
});
