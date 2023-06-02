import { html } from '../library.js';
import { getTopScores } from '../api/firebase.js';

let scoreView = (scores) => html`<a id='backButtonScores' href="/" style="position:absolute; top: 80px; left: 100px;">Return to home</a><table id="scoresTable"><thead><tr><th>Username</th><th>Score</th></tr></thead><tbody>${scores.map(x => scoreTemplate(x))}</tbody></table>`;


let scoreTemplate = (score) => html`<tr><td>${score[0]}</td><td>${score[1]}</td></tr>`;

export async function showScores(ctx) {
    //getting the data from the database for the best scores and visualizing the best 10 scores

    let scoresData = await getTopScores();

    let singlePlayerScores= scoresData.SinglePlayer;
    let mulplayerScores= scoresData.Multiplayer;

    // let orderedArray = [];
    // for (const current of scoresArray) {
    //     orderedArray.push([current[1].name, current[1].score]);
    // }

    // orderedArray = orderedArray.sort(function (a, b) {
    //     return b[1] - a[1];
    // });

    await ctx.render(scoreTemplate(singlePlayerScores));
}