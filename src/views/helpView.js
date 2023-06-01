import { html } from '../library.js';

let helpView = () => html`
<section>
<h1>Help</h1>
</section>
`;
export async function showHelp(ctx) {
    ctx.render(helpView());
}
