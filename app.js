const textInput = document.querySelector("#textInput");
const voiceSelect = document.querySelector("#voiceSelect");
const playBtn = document.querySelector("#playBtn");

const synth = window.speechSynthesis;

let voices = [];

//function to load voices
function loadVoices() {
    voices = synth.getVoices();
    // console.log(voices);
    voiceSelect.innerHTML = voices.map((voice, index) => `<option value=${index}>${voice.name}</option>`);
}

synth.onvoiceschanged = loadVoices;

//funtion to convert text to speech
function convert() {
    const text = textInput.value

    const speech = new SpeechSynthesisUtterance(text);

    const selectedVoice = voices[voiceSelect.value];

    if(selectedVoice) {
        speech.voice = selectedVoice;
    }

    return speech;
}

playBtn.addEventListener("click", () => {
    if(!textInput.value) {
        alert("Enter text first!");
        return;
    } else {
        synth.speak(convert());
    }
})