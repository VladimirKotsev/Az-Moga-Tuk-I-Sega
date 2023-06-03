import { html, page } from '../library.js';

const settingGameView = () => html`

<h1 class="title">Welcome to the Game</h1>

<div class="main-container">
  <p class="chooseMode">Chose mode:</p>
  <form id="settingGameForm">
    <div class="radioButtons">
      <input type="radio" id="singlePlayerRadio" name="mode" value="single">
      <label>Single</label><br>
      <input type="radio" id="multiplayerRadio" name="mode" value="multiplayer">
      <label>Multiplayer
      </label><br>
    </div>

    <label for="playerOneName">Player 1</label>
    <input type="text" name="playerOneName" required>
    <label for="playerTwoName">Player 2</label>
    <input type="text" name="playerTwoName" required>

    <label for="nDimension">Columns count:</label>
    <input type="number" name="nDimension" min="4" max="20" required>
    <label for="mDimension">Rows count:</label>
    <input type="number" name="mDimension" min="4" max="20" required>

    <input type="submit" class="gameButton">
  </form>
`;


export async function showSettingGameView(ctx) {
    ctx.render(settingGameView());

    let settingGameForm = document.getElementById("settingGameForm");
    settingGameForm.addEventListener('submit', startTheGame);

    async function startTheGame(event) {
        event.preventDefault();

        let form = event.target;
        const formData = new FormData(form)
        const formObject = {};

        for (let [key, value] of formData.entries()) {
            formObject[key] = value;
        }

        formObject['playerTurn']="playerOne";
        
        localStorage.setItem('gameData', JSON.stringify(formObject));

        //validation
        let singlePlayer = document.getElementById('singlePlayerRadio').checked;
        let multiplayer = document.getElementById('multiplayerRadio').checked;

        if (singlePlayer) {
            page.redirect('/singlePlayer');
        }
        else if(multiplayer) {
            page.redirect('/multiplayer');
        }
    }
}







