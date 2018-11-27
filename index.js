import Content from './src/Content';
import Footer from './src/Footer';
import Navigation from './src/Navigation';
import Header from './src/Header';
console.log(Footer);

document.querySelector('#root').innerHTML = `
  ${Navigation}
  ${Header}
  ${Content}
  ${Footer}
`;

console.log(document.body.innerHTML);

var title = document.querySelector('h1');

var greet = function greet(){
    if(!userName){
        userName = prompt('What is you name, for real this time?');
    
        greet();
    }
    else{
        title.textContent += `, <em>${userName}</em>`;
    }
};

// var userName =  prompt('What is your name?');
// greet();