const memory_items = document.querySelectorAll('.memory__item')
const text = document.querySelector('.text')
const titul = document.querySelector('.title')
const restart = document.querySelector('.restart')
if(localStorage.getItem("Wins") == null){
  localStorage.setItem("Wins", [])
}

memory_items.forEach(el =>{ 
  let randomPlace = Math.floor(Math.random() * (13 - 1)) + 1
  el.style.cssText= `
  order: ${randomPlace};`
})
let firstItem = undefined
let secondItem = undefined
let countMoves = 0
function flip(){
    if(firstItem == undefined){
      this.classList.add('flip')
      this.removeEventListener('click',flip)
      firstItem = this
    }else if(secondItem == undefined){
        this.classList.add('flip')
      secondItem = this
      this.removeEventListener('click',flip)
      equalityCheck(firstItem,secondItem)
    }
}
recordsList()
function controlWin(){
  let count = 0
  memory_items.forEach((el)=>{
    if(el.classList.contains('flip')){
      count += 1
    }
  })
  if(count == 12){
    records()
    recordsList()
    text.style.display = "block"
    titul.style.display = "block"
    restart.style.display = "block"
    text.textContent = `It took you ${countMoves} moves`
  }
}
function equalityCheck(first, second){
  setTimeout(() =>{
    if(first.getAttribute(["data-item"])  == second.getAttribute(["data-item"])){
      firstItem = undefined
      secondItem = undefined
      countMoves += 1
      controlWin()
    }else{
      first.addEventListener('click',flip)
      second.addEventListener('click',flip)
      first.classList.remove('flip')
      second.classList.remove('flip')
      firstItem = undefined
      secondItem = undefined
      countMoves += 1
    }
  },1000)
}
function records(){
  mas = localStorage.getItem("Wins").split('')
  if(mas.length > 1){
    mas = localStorage.getItem("Wins").split(',')
  }
  if(mas.length >= 10){
    mas.shift()
    mas.push(countMoves)
    localStorage.setItem("Wins",mas)
  }else{
    mas.push(countMoves)
    localStorage.setItem("Wins",mas)
  }
}
function recordsList(){
  const lis = document.querySelectorAll('li')
  lis.forEach(el =>{
    el.remove()
  })
  let rec = localStorage.getItem("Wins").split(',')
  console.log(rec)
  for(let b = 0; b < rec.length; b++){
    const list = document.querySelector('.list')
    const li = document.createElement('li')
    li.textContent = `${rec[b]}`
    list.append(li)
  }
}
memory_items.forEach(el =>{ el.addEventListener('click',flip) })

restart.addEventListener('click',()=>{
  memory_items.forEach((el) =>{
    el.classList.remove('flip')
  })
  text.style.display = "none"
  titul.style.display = "none"
  restart.style.display = "none"
  setTimeout(()=>{
    memory_items.forEach(el =>{ 
      el.addEventListener('click',flip)
      let randomPlace = Math.floor(Math.random() * (13 - 1)) + 1
      el.style.cssText= `
      order: ${randomPlace};`
    })
  },500)
  countMoves = 0
})