
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
  
  // Изменение фото-видео под 768 pixel
  const video = document.querySelector('.Video-photo')
  window.addEventListener('resize',() => {
    if(window.innerWidth < 800 ){
      video.src = "IMG/video-player768.jpg"
    }else{
      video.src = "IMG/video-player.jpg"
    }
  })
  const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }
  

  // Change lang
  const lang = document.querySelectorAll('[data-lang]')

  if(!localStorage.getItem('lang')){

    localStorage.setItem('lang',"en")

  }
  TranslateLang(localStorage.getItem('lang')) 
  if(localStorage.getItem('lang') == 'ru'){

    lang[1].classList.add('active-lang')

  }else if(localStorage.getItem('lang') == 'en'){

    lang[0].classList.add('active-lang')

  }


  lang.forEach((element) => {

    element.addEventListener('click', () =>{

      for(let j = 0; j < lang.length;j++){
        if(lang[j] != lang[element]){
          lang[j].classList.remove('active-lang');
        }
      }
      element.classList.add('active-lang')

      localStorage.setItem('lang', element.getAttribute('data-lang')); 
      
      TranslateLang(localStorage.getItem('lang'))
    })

  } )


  function TranslateLang(lang){
    const translate = document.querySelectorAll('[data-i18n]')
    translate.forEach(element => {
        let getAttr = element.getAttribute('data-i18n')
        element.textContent = i18Obj[lang][getAttr]
    })
  }

  // Change theme
const changeTheme = document.querySelector('.change-theme')
const logos = document.querySelectorAll('[data-theme]')
const titul = document.querySelectorAll('.titul-text')
const lineTitul = document.querySelectorAll('.line-titul')
const portfbutton = document.querySelectorAll('.Portfolio__menu-item')
const humbMenu = document.querySelector('.hamburger-menu')
const humbLine = document.querySelectorAll('.line')


switchTheme(localStorage.getItem('theme'))



changeTheme.addEventListener('click', ()=>{
  if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', 'black')
  }
  if(localStorage.getItem('theme') == 'black'){
    localStorage.setItem('theme', 'white')
  }else{
    localStorage.setItem('theme', 'black')
  }
  switchTheme(localStorage.getItem('theme'))
})
function switchTheme(theme){
  if(theme == 'white'){
    hamburger.addEventListener('click', () =>{
      humbLine.forEach((element) =>{
        element.classList.add("darkhamb")
      })
    })
    humbMenu.classList.add('darkback')
    lineTitul.forEach((element) =>{
      element.classList.add('darkline')
    })
    portfbutton.forEach((element) =>{
      element.classList.add('darkbutton')
    })
    titul.forEach((element) =>{
      element.classList.add('darkback')
    })
    body.classList.add('darkback')

    logos.forEach(element => {
      
      element.classList.add('darktheme')
      
    })
  }else if (theme == 'black'){
    hamburger.addEventListener('click', () =>{
      humbLine.forEach((element) =>{
        element.classList.remove("darkhamb")
      })
    })
    humbMenu.classList.remove('darkback')
    lineTitul.forEach((element) =>{
      element.classList.remove('darkline')
    })
    portfbutton.forEach((element) =>{
      element.classList.remove('darkbutton')
    })
    titul.forEach((element) =>{
      element.classList.remove('darkback')
    })
    body.classList.remove('darkback')

    logos.forEach(element => {
      
      element.classList.remove('darktheme')
      
    })
  }
}