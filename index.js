// detecte btn mousepress

let btns = document.querySelectorAll(".drum")

for (i of btns) {
  i.addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML)
  })  
}

// detecte keybord
document.addEventListener("keydown", function(event){
    makeSound(event.key)
})


function makeSound (key) {
  
  switch (key) {
    case "q": 
      let tom1= new Audio('sounds/tom-1.mp3')
      tom1.play()
      break;
    case "s":
      let tom2= new Audio('sounds/tom-2.mp3')
      tom2.play()
      break
    case "d":
      let tom3= new Audio('sounds/tom-3.mp3')
      tom3.play()
      break
    case "f":
      let tom4= new Audio('sounds/tom-4.mp3')
      tom4.play()
      break
    case "j":
      let snare= new Audio('sounds/snare.mp3')
      snare.play()
      break
    case "k":
      let crash= new Audio('sounds/crash.mp3')
      crash.play()
      break
    case "l":
      let kick= new Audio('sounds/kick-bass.mp3')
      kick.play()
      break
    default:
      console.log(buttonInnerHTML)
}}
