document.addEventListener("keypress", handleClick);

for (var i = 0; i <= (document.querySelectorAll("button").length); i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}


document.addEventListener("click", function(event) {
  console.log(event.PROTOTYPE);
});

function handleClick() {
  var x = this.innerHTML;
  if (event.type == "keypress") {
    x = event.key;
  }

animation(x);

  switch (x) {
    case "w":
      var audioElement = new Audio("sounds/crash.mp3");
      audioElement.play();
      break;

    case "s":
      var audioElement1 = new Audio("sounds/snare.mp3");
      audioElement1.play();
      break;

    case "d":
      var audioElement2 = new Audio("sounds/tom-1.mp3");
      audioElement2.play();
      break;

    case "j":
      var audioElement3 = new Audio("sounds/tom-2.mp3");
      audioElement3.play();
      break;

    case "k":
      var audioElement4 = new Audio("sounds/tom-3.mp3");
      audioElement4.play();
      break;

    case "l":
      var audioElement5 = new Audio("sounds/tom-4.mp3");
      audioElement5.play();
      break;

    case "a":
      var audioElement6 = new Audio("sounds/kick-bass.mp3");
      audioElement6.play();
      break;

  }
}

function animation(x){
  var y=document.querySelector("." + x);
  y.classList.add("pressed");

  setTimeout(function () {
      y.classList.remove('pressed');
    }, 200);

}
