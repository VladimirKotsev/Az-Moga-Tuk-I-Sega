import { html } from '../library.js';

const scoreView = () => html`
<h1>score</h1>
`;


export async function showScores(ctx) {
    ctx.render(scoreView());
}