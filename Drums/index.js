const soundMap = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
  };

const buttons = document.querySelectorAll("button")
//add event listeners to the buttons
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        const letter = this.innerHTML;
        makesSound(letter);
        buttonAnimation(letter);
    });
}
//add event listeners to the keydown
document.addEventListener("keydown", function(event) {
    
    makesSound(event.key);
    buttonAnimation(event.key);

});

function makesSound(key)
{
    console.log(key);
    const soundFile = soundMap[key];
    if (soundFile )
    {
        const audio = new Audio(soundFile);
        audio.play();
    } 
}

function buttonAnimation(currentkey){
    console.log("Button animation");
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 500);

}