import { html, page } from '../library.js'
import { renderTemplate } from '../app.js';

let homeView = () => html`
<section>
<p class="title">Queens</p>
</div>
<div class="buttons">
<a href="/game">
    <button class="gamebutton" id="game">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Start Game
    </button>
</a>
<a href="/scores">
    <button class="gamebutton" id="scores">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Best score
    </button>
</a>
<a href="\help">
    <button class="gamebutton" id="help">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Help
    </button>
</a>

<div class="group">
<a href="#">
    <div class="socials" id="instagram">
        <img src="/pictures/instagram.png" alt="" width="20" height="20">
    </div>
</a>
<a href="#">
    <div class="socials" id="gmail">
        <img src="/pictures/gmail.png" alt="" width="20" height="20">
    </div>
</a>
<a href="#">
    <div class="socials" id="github">
        <img src="/pictures/github.png" alt="" width="20" height="20">
    </div>
</a>
<a href="#" >
    <div class="socials" id="settings">
        <img src="/pictures/settings.png" alt="" width="20" height="20">
    </div>
</a>
</div>
</div>
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