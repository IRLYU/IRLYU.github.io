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


// Смена картинок 
const buttons = document.querySelectorAll('.Portfolio__menu-item')
const photos = document.querySelectorAll('.photo')
buttons.forEach(button => {
  button.addEventListener('click', () =>{
    for(let j = 0; j < buttons.length;j++){
      if(buttons[j] != buttons[button]){
        buttons[j].classList.remove('active-button');
      }
    }
    let season = button.getAttribute("data-season")
    button.classList.add('active-button');

    for(let i = 0; i < photos.length; i++){
      photos[i].src = `IMG/${season}/${i + 1}.jpg`
    }
  })
})
// пам