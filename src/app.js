import { page, render } from './library.js';
import { showAbout } from './views/aboutView.js';
import { showGame } from './views/gameView.js';
import { showHome } from './views/homeView.js';
import { showBestScores } from './views/scoresView.js';

page('/', showHome);
page('/about', showAbout);
page('/game', showGame);
page('/bestScore', showBestScores);

page.start();

export function renderTemplate(content){
    render(content, document.querySelector(`main`));
}

