import { html} from '../library.js';

let homeView = () => html`
<section>
<div>
<p class="title">Queens</p>
</div>
<div class="buttons">
<a href="/game">
    <button class="gamebutton"> <!-- to do id's and event listeners-->
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Start Game
      </button>
</a>
<a href="/scores">
    <button class="gamebutton"    onClick="window.location.href='/scores'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Best score
    </button>
</a>
<a href="/help">
    <button class="gamebutton"    onClick="window.location.href='/help'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Help
    </button>
</a>

<div class="group">
    <div class="socials">
        <img src="/pictures/instagram.png" alt="" width="20" height="20">
    </div>
    <div class="socials">
        <img src="/pictures/gmail.png" alt="" width="20" height="20">
    </div>
    <div class="socials">
        <img src="/pictures/github.png" alt="" width="20" height="20">
    </div>
</div>
</div>
</section>
`;

export async function showHome(ctx) {
    ctx.render(homeView());
}