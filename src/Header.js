import { html } from 'lit-html';

export default function Header(state){
    return html`
<div id="header">
    <div class="container">
      <h1 class="brand">${state[state.active].title}</h1>
      <h2 class="brand">Hello! My name is Jason Brown</h2>

      <img src="https://pbs.twimg.com/profile_images/1062790910407172096/1aOkmPz6_400x400.jpg"
        alt="My Photo">

    </div>
  </div>

`;
}