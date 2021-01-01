const sliderPosts = document.querySelectorAll('.slider__post');
const sliderButtons = document.querySelectorAll('.slider__button');
let activePost = sliderPosts[0];
let activeButton = sliderButtons[0];

sliderButtons[0].addEventListener('click', () => toggleActiveStatus(0));
sliderButtons[1].addEventListener('click', () => toggleActiveStatus(1));
sliderButtons[2].addEventListener('click', () => toggleActiveStatus(2));

function toggleActiveStatus(targetIndex) {
  activePost.classList.remove('slider__post_active');
  activeButton.classList.remove('slider__button_active');
  activeButton = sliderButtons[targetIndex];
  activePost = sliderPosts[targetIndex];

  activePost.classList.add('slider__post_active');
  activeButton.classList.add('slider__button_active');
}