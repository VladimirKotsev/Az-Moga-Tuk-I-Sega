import { html } from '../library.js';

let singlePlayerView = (data) => html`
<h1>${String(data)}</h1>
`;


export async function showSinglePlayerGame(ctx) {

    console.log(ctx.gameData);

    let data=ctx.gameData;
    
    await ctx.render(singlePlayerView(data));

}