import { html, page } from '../library.js'
import { renderTemplate } from '../app.js';

const homeView = html`
    <body class="backcolor">
        <div>
            <p class="title">Queens</p>
        </div>
        <div class="buttons">
            <span>
                <button class="gamebutton">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Start Game
                </button>
            </span>
            <span>
                <button class="gamebutton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Best score
                </button>
            </span>
            <span>
                <button class="gamebutton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Help
                </button>
            </span>
        </div>
    </body>
    <footer>   
        <div class="socials">
            <img src="/pictures/instagram.png" alt="" width="20" height="20">
        </div>
        <div class="socials">
            <img src="/pictures/gmail.png" alt="" width="20" height="20">
        </div>
        <div class="socials">
            <img src="/pictures/github.png" alt="" width="20" height="20">
        </div>   
    </footer>
`;

export function showHome(){
    renderTemplate(homeView);
}  
