import { page, render } from './library.js';
import { showHelp } from './views/helpView.js';
import { showGame } from './views/gameView.js';
import { showHome } from './views/homeView.js';
import { showScores } from './views/scoresView.js';
import { showSettings } from './views/settingsView.js';


page(contextDecorator)
page('/', showHome);
page('/help', showHelp);
page('/game', showGame);
page('/scores', showScores);
page('/settings', showSettings);

let mainElement= document.getElementById("mainPage");
let audioElement= document.getElementById("myAudio");
audioElement.play();



page.start();
page.redirect('/');

async function contextDecorator(ctx, next) {
    ctx.render = (content) => render(content, mainElement);
    ctx.audio = audioElement;
    next();
}
