import { html, render} from '../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
<div class="profile">
    <img class="profile-pic" src="images/woman.png" alt="profile-pic">
    <h2>Hi.</h2>
    <p class="intro">I'm from Gorna Oryahovitsa, Bulgaria. Former Casino Dealer. Full-time Web Development
        student. Part-time hotel owner.</p>
</div>
<hr>
`

export const displayHome = () => {
    render(homeTemplate(), document.querySelector('.middle-container'));
}