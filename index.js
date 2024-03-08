// alert("hello fsw1");
function handleClick() {
    alert("ini button di klik");
}

var drumButtons = document.querySelectorAll(".drum");
// console.log(buttons);

for(let i = 0; i < drumButtons.length; i++){
    // console.log(i);
    drumButtons[i].addEventListener("click", function(){
         // console.log(this);
        // console.log(this.innerHTML);
        // console.log(this.textContent);

        let btnInnerHTML = (this.innerHTML);

        makeSound(btnInnerHTML);

        // this.style.color = "white";
        buttonAnimation(btnInnerHTML);
    });
}


//deteksi keyboard yang ditekan

addEventListener("keypress", function(event){
    console.log(event.key)
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
    default:
        alert("gak ada button woy")
    }
}

function buttonAnimation(key){
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    activeBtn.classList.add("white");

    // activeBtn.style.colour. =  

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
        activeBtn.classList.add("white");
    }, 100);

}


// var audio = new Audio("sounds/crash.mp3")
// audio.play()