function sndFX_click(){
    var audio = document.createElement("audio");
    audio.src = "https://www.soundjay.com/buttons/sounds/button-2.mp3";
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();   
}

$('#makeNoise').bind("click",function() {
sndFX_click();
}); 