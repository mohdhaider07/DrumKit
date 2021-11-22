
for (var i=0;i<document.querySelectorAll("button").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function (){
  makesound(this.innerHTML);
  buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(x){
  switch (x) {
    case "w":
    var audio= new Audio("sounds/tom-0.mp3");
    audio.play();
      break;
      case "a":
      var audio= new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case "s":
      var audio= new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

      case "d":
      var audio= new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "j":
      var audio= new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "k":
      var audio= new Audio("sounds/tom-5.mp3");
      audio.play();
      break;
      case "l":
      var audio= new Audio("sounds/tom-6.mp3");
      audio.play();
      break;
  }
}
function buttonAnimation(key){
var buttonClicked=document.querySelector("."+key);
buttonClicked.classList.add("pressed")
setTimeout(function(){
  buttonClicked.classList.remove("pressed");
}, 100);
}
