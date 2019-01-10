import * as Screens from './Screens';
import { html } from 'lit-html';

export default function Content(state){
    return html`
<div id="content">
    <div class="container">
    ${Screens[state.active](state)}
     </div>
  </div>

`;
}