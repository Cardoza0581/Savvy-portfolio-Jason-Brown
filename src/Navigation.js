export default function Navigation(){
    return `
<div id="navigation">
    <div id="container"> 
    <ul>
      <li>
        <a href="./blog">Blog</a></li>
      <li>
        <a href="./content">Content</a></li>

      <li>
        <a href="./projects">Projects</a>
        <ul class="dropdown">
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
      </li>
    </ul>
  </div>
  </div>

`;
}