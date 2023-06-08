import { html, page } from '../library.js';

const settingGameView = () => html`
<section>
<div class="main-container">
<h1 class="title">Welcome to the Game</h1>
<form id="settingGameForm">
<p class="chooseMode">Choose mode:</p>
    
    <label class="labelFontsize" for="playerOneName">Player 1</label>
    <input class="inputStyle" type="text" name="playerOneName" required>
    <label class="labelFontsize" for="playerTwoName">Player 2</label>
    <input class="inputStyle" type="text" name="playerTwoName" required>

    <label class="labelFontsize" for="nDimension">Columns count:</label>
    <input class="inputStyle" type="number" name="nDimension" min="4" max="20" required>
    <label class="labelFontsize" for="mDimension">Rows count:</label>
    <input class="inputStyle" type="number" name="mDimension" min="4" max="20" required>

    <input type="submit" class="gameButton" value="Play">
  </form>
  </section>
`;


export async function showSettingGame(ctx) {
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
        page.redirect('/multiplayer');
        //validation

    }
}







