const hamburger = document.querySelector('.hamburger');
const hambActive = document.querySelector('.hamburger-menu')
const body = document.querySelector('body')
const anchor = document.querySelectorAll('.anchor')
function toggleMenu() {
  hamburger.classList.toggle('open');
  hambActive.classList.toggle('hamb-active');
  body.classList.toggle('visible');
}
hamburger.addEventListener('click', toggleMenu);
anchor.forEach( element => {
  element.addEventListener('click', toggleMenu);
})
window.addEventListener('resize',() => {
  if(window.innerWidth == 768 && body.classList.contains('visible')){
    toggleMenu()
  }
})