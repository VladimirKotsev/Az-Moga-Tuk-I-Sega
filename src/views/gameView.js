import { html } from '../library.js';

let gameView = () => html`
<h1>game</h1>
`;


export async function showGame(ctx) {
    ctx.render(gameView());
}