import { html, render } from '../node_modules/lit-html/lit-html.js';

const studiesTemplate = () => html`
<div class="skills">
    <h2>What have I studied</h2>
    <div class="skill-row">
        <img class="multi-img" src="images/c-sharp.png" alt="binary-code-img">
        <h3>C# Web Development</h3>
        <p>In 2021 I enrolled in the Software Engineering program at SoftUni with C#. Throughout the courses, I've
            learned about linear data structures and multidimensional and associative arrays. Also, how to work with
            Objects and Classes, basic OOP principles, and Unit Testing. </p>
    </div>
    <div class="skill-row">
        <img class="chip-img" src="images/js.png" alt="">
        <h3>Javascript Advanced</h3>
        <p>As part of the Software Engineering program I've completed the JS Advanced module in which I've learned
            about DOM Manipulation and Events, HTTP Requests, and REST Services as well as asynchronous programming and
            how to create Single-Page Applications using Javascript.</p>
    </div>
    <div class="skill-row">
        <img class="multi-img" src="images/sql.png" alt="">
        <h3>MS SQL</h3>
        <p>Currently, I'm enrolled in the C# Database module where we learn how to work with relational databases,
            and how to manipulate, save and extract data. In the second module of this course, I'll be learning Entity
            Framework Core.</p>
    </div>
    <div class="skill-row">
        <img class="chip-img" src="images/browser.png" alt="">
        <h3>HTML and CSS</h3>
        <p>Although not part of the main SoftUni program of Software Engineering I've learned basic HTML and CSS
            through some Udemy courses and a lot of YouTube and Google so I can create this page. I found that I
            really like creating something visually beautiful and I'd like to learn more about these technologies
            (i.e. how the hell to move the bloody 'CONTACT ME' button to be in the light-blue section below.)
        </p>
    </div>
</div>
<hr>
`

export const displayStudies = () => {
    render(studiesTemplate(), document.querySelector('.middle-container'));
}