import { html, render } from '../node_modules/lit-html/lit-html.js';

const pastTemplate = () => html`
<div class="skills">
    <h2>What have I been up to</h2>
    <div class="skill-row">
        <h3 class="multi-img">2008-2012</h3>
        <h3>Education</h3>
        <p>After graduating high school with an orientation to foreign languages I got a Bachelor's Degree in Management
            from the University of Economics in Varna, Bulgaria. I've learned a lot about organizing and maintaining a
            successful business, how to be an efective leader and how to motivate others.</p>
    </div>
    <hr>
    <div class="skill-row">
        <h3 class="multi-img">2013-2020</h3>
        <h3>Work</h3>
        <p>While studying at University I took advantage of the Work and Travel program and worked for a summer in the
            The US,  which sparked my love for traveling. After graduating I signed up for casino dealer training and shortly
            after signed on my first cruise ship. In 7 years I've done 7 contracts across 11 different ships and 4
            different cruise lines. I've visited 79 countries, worked with a crew of more than 80 nationalities, and made
            lifelong friendships.
        </p>
        <p>Although being a casino dealer is not a transferable skill, working on board has taught me to be
            responsible, disciplined, and respectful and to always strive to be better. Also, how to be a team player, how to
            adapt to an ever-changing environment, and to provide excellent custommer service. If you don't believe me, <a
                href="https://www.linkedin.com/pulse/why-ex-cruise-ship-employees-make-best-employment-candidates-ahire/?trackingId=V64r3JR8abjXSoCv9roqEA%3D%3D">Here's</a>
            an article about why ex-cruise ship employees make the Best employment candidates.</p>
    </div>
    <hr>
    <div class="skill-row">
        <h3 class="multi-img">2004-Present</h3>
        <p>Hotel Perla is a family-owned and operated business that's been in my family for nearly 20 years. I've been a
            part of every aspect of running a small business, from accounting to maintenance to managing people and
            providing great service to our customers. This experience has given me a unique perspective that I've
            tried to apply to every other job I've had. I always try to see things from the employer's point of view
            instead of solely from the employee's perspective. I can truly understand and can relate to the challenges,
            stresses, highs, and lows involved in running a business.
        </p>
    </div>
    <hr>
</div>
`

export const displayPast = () => {
    render(pastTemplate(), document.querySelector('.middle-container'));
}