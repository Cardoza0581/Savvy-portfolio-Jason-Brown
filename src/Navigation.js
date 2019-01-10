import { capitalize, lowerCase } from 'lodash';
import { html } from 'lit-html';
function buildLink(link){
    var href = '';


    if(link !== 'Home'){
        href = link;
    }

    return html`
        <li>
        <a href="/${lowerCase(href)}" data-navigo>
            ${capitalize(link)}
            </a>
        </li>
    `;
}


export default function Navigation(state){
    return html`
      <div id="navigation">
        <ul class="container">
          ${state[state.active].links.map(buildLink)}
        </ul>
      </div>
    `;
}

