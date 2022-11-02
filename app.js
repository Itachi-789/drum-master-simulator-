let audio = document.getElementById("myAudio")
let musicOff = document.getElementById("MusicOFF")
let musicOn = document.getElementById("MusicON")
function audioPlay(){
    audio.play()
    musicOn.style.display = "block"
    musicOff.style.display = "none"
}

function audioPause(){
    audio.pause()
    musicOff.style.display = "block"
    musicOn.style.display = "none"
}