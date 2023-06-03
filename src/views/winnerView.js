import { html } from '../library.js'

const winnerView = (winner, points) => html`
<section>
<p class="title">The winner is ${winner} with a score of: ${points}</p>
<a href="/settingGameView">
<button class="gameButton" id="game">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Play Again
</button>
</a>
<a href="/">
<button class="gameButton" id="game">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   Main page
</button>
</a>
</section>`;

export async function showWinner(ctx) {

    let bestScore = JSON.parse(localStorage.getItem('bestScore'));
    let winnerName =localStorage.playerWinner;

    localStorage.clear();
    ctx.render(winnerView(winnerName,bestScore));
}