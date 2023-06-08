import { html } from '../library.js'

const homeView = (theme) => html`
<section>
    <p class="title">MathTricks</p>
    <div class="buttons">
    <a href="/chooseMode">
        <button class="gameButton" id="game">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Start Game
        </button>
    </a>
    <a href="/help">
        <button class="gameButton" id="help">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Help
        </button>
    </a>
    <a href="/settings" ">
        <button class="gameButton" id="settings">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Settings
        </button>
    </a>

    <div class="group" id="social">
    <a href="https://www.instagram.com/mathtricks03062023/">
        <div class="socials" id="instagram">
            <img src="/resources//instagram.png" alt="" width="20" height="20">
        </div>
    </a>
    <a href="https://github.com/VladimirKotsev/Az-Moga-Tuk-I-Sega">
        <div class="socials" id="github">
            <img src="/resources/github.png" alt="" width="20" height="20">
        </div>
    </a>
    </div>
    </div>
</section>`;

export async function showHome(ctx) {
    let theme = sessionStorage.getItem("theme");
    ctx.render(homeView(theme));
}

