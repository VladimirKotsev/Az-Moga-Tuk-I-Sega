import { html } from '../library.js';

const gameView = () => html`
<h1 class="title">Welcome to the Game</h1>
  <h3 class="secondaryText">Choose your game mode:</h3>

  <div class="radio-container">
  <input type="radio" id="option1" name="options">
  <label for="option1" class="custom-radio">
    <img src="../../resources/helpPagePhoto.jpg" alt="Option 1">
  </label>
  <span>Option 1</span>
</div>
  

<input type="radio"></input>

<p>Set the figures you want to use</p>
<button class="image-button">
  <img src="../../resources/helpPagePhoto.jpg" alt="Button Image">
  Click Me
</button>
<button class="image-button">
  <img src="../../resources/helpPagePhoto.jpg" alt="Button Image">
  Click Me
</button>

<button class="gameButton" >Start the Game!</button>


`;


export async function showGame(ctx) {
    ctx.render(gameView());

}



