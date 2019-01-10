import { html } from 'lit-html';
export default function Footer(){
    return html`
<div id="footer">

    <div class="container">
      <ul>Contact Information
        <li><i class="fab fa-github"></i>
          <a href="https://github.com/Cardoza0581">Github</a></li>
        <li><i class="fas fa-at"></i>
          <a href="Mailto: cardoza0581@hotmail.com">Email</a></li>
        <li><i class="fab fa-twitter"></i>
          <a href="https://twitter.com/theyardgnome">Twitter</a></li>
      </ul>
    </div>
  </div>

`;
}