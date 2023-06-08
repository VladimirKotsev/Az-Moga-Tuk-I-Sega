import { html } from '../library.js';

let chooseMode = (setMode) => html`
<section>

    <div>
        <a onclick="${(event) =>setMode(event,"singleplayer") }">
          <img src="../../resources/helpPagePhoto.jpg">
        </a>

        <a onclick="${(event) =>setMode(event,"multiPlayer") }">
          <img src="../../resources/helpPagePhoto.jpg">
        </a>
    </div>

</section>
`;
export async function showChooseMode(ctx) {
    ctx.render(chooseMode(setMode));

    function setMode(event, mode) {
        event.preventDefault();
        localStorage.setItem('gameMode', mode);
    }
}
