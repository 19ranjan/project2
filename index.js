

var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0; i<noOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
});
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
});

function makeSound(key){
switch (key) {

  case "w":
  var crash= new Audio("sounds/crash.mp3");
  crash.play();
    break;

    case "a":
      var  kick= new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      case "s":
        var  snare= new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
          var ton1= new Audio("sounds/tom-1.mp3");
          ton1.play();
          break;
        case "k":
            var ton2= new Audio("sounds/tom-2.mp3");
            ton2.play();
            break;
        case "l":
              var ton3= new Audio("sounds/tom-3.mp3");
              ton3.play();
              break;
              case "k":
                  var ton2= new Audio("sounds/tom-4.mp3");
                  ton2.play();
                  break;

        default:




}


}
