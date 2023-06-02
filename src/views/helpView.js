import { html } from '../library.js';

let helpView = () => html`
<section>

<a class= "helpPageReturnButton" href="/">
    <button class="gameButton">Return</button>
</a>

<div class="heading">
    <p class="title"> How to play the game? </p>
</div>
    
<div class="gameDescriptionTextContainer">
    <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>

<img src="../../resources/helpPagePhoto.jpg">
</div>

</section>
`;
export async function showHelp(ctx) {
    ctx.render(helpView());
}
