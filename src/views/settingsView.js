import { html } from '../library.js';

let settingsView = () => html`<div class="container">
<h1 class="title">Settings</h1>

<h2>Background Music</h2>
<label>
  <input type="checkbox" id="musicCheckbox"> Mute background music
  </label>

<h2>Volume</h2>
<input type="range" id="volumeSlider" min="0" max="100" step="1" value="50">

<h2>Theme</h2>
<form>
  <input type="radio" id="light" name="theme" value="Light">
  <label for="html">Light </label><br>
  <input type="radio" id="dark" name="theme" value="Dark">
  <label for="css">Dark</label><br>
</form>
</div>
`;



export async function showSettings(ctx) {
  ctx.render(settingsView(muteMusic));


  let musicCheckbox = document.getElementById("musicCheckbox");
  musicCheckbox.addEventListener('change',muteMusic);

  function muteMusic(){

    if(musicCheckbox.checked==true){
        ctx.audio.pause();
    }
    else{
        ctx.audio.play();
    }

}
}

function themeSelection(ctx){

  if(ctx.backgroundColor == 'blackTheme'){

    ctx.backgroundColor = 'whiteTheme';
  }
  else{
    
    ctx.backgroundColor = 'blackTheme';
  }

  
}


