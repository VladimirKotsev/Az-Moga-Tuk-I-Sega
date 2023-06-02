import { html } from '../library.js'

const homeView = () => html`
<section>
    <p class="title">Queens</p>
    <div class="buttons">
    <a href="/game">
        <button class="gameButton" id="game">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Start Game
        </button>
    </a>
    <a href="/scores">
        <button class="gameButton" id="scores">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Best score
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
    <a href="" onclick="${toggle}">
        <button class="gameButton" id="settings">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Settings
        </button>
    </a>

    <div class="group" id="social">
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
    <a href="https://github.com/VladimirKotsev/Az-Moga-Tuk-I-Sega">
        <div class="socials" id="github">
            <img src="/pictures/github.png" alt="" width="20" height="20">
        </div>
    </a>
    </div>
    </div>
</section>

<section id="settings" class="popUpHidden">
    <h1> test <h1>
    <button>Close</button>
<section>
`;

export async function showHome(ctx) {
    ctx.render(homeView());
}
function toggle(){
     let section = document.getElementById("settings");
     section.className = "popUpActive";
}

