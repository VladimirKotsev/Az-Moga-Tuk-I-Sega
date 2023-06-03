import { html } from '../library.js';

let settingsView = () => html`
<div class="container">
    <h3 class="title">Settings</h3>
    <h2>Background Music</h2>
    <label>
        <input type="checkbox" id="musicCheckbox">Mute background music
    </label>

    <h2>Volume</h2>
    <input type="range" id="volumeSlider" min="0" max="100" step="1" value="50">
</div>
`;

export async function showSettings(ctx) {
    ctx.render(settingsView(muteMusic));

    let musicCheckbox = document.getElementById("musicCheckbox");
    musicCheckbox.addEventListener('change', muteMusic);

    let volumeSlider = document.getElementById("volumeSlider");
    volumeSlider.addEventListener("input", volumeChange);

    function muteMusic() {
        if (musicCheckbox.checked == true) {
            ctx.audio.pause();
        }
        else {
            ctx.audio.play();
        }
    }

    function volumeChange() {
        let sliderValue = volumeSlider.value;
        ctx.audio.volume = sliderValue / 100;
    }
   
}



