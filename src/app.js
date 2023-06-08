import { page, render } from './library.js';
import { showHelp } from './views/helpView.js';
import { showSettingGame } from './views/settingGameView.js';
import { showChooseMode } from './views/chooseModeView.js';
import { showHome } from './views/homeView.js';
import { showSettings } from './views/settingsView.js';
import { showMultiPlayerGame } from './views/multiplayer.js'
import { showWinner } from './views/winnerView.js';


page(contextDecorator)
page('/', showHome);
page('/help', showHelp);
page('/chooseMode', showChooseMode)
page('/settingGameView', showSettingGame);
page('/settings', showSettings);
page('/multiPlayer', showMultiPlayerGame);
page('/winner', showWinner);

let mainElement = document.getElementById("mainPage");
let audioElement = document.getElementById("myAudio");

// window.addEventListener('DOMContentLoaded', () => {
//     audioElement.play();
// });

page.start();
page.redirect('/');

async function contextDecorator(ctx, next) {
    ctx.render = (content) => render(content, mainElement);
    ctx.audio = audioElement;
    next();
}
