const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [];
let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;  //passing
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() =>{
        clickedKey.classList.remove("active");
    }, 150);
}

pianokeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key))
})

const pressedKey = (e) => {
    if(allkeys.includes(e.key)){
        playTune(e.key)
    };
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHide = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHide);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

