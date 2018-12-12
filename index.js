import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import { capitalize } from 'lodash';

var router = new Navigo(window.location.origin);


var State = {
    'active': 'Home',
    'Home': {
        'title': 'Welcome to my Savvy Coders Portfolio Project!!!!',
        'links': [ 'Blog', 'Contact', 'Projects' ]
    },
    'Blog': {
        'title': 'Please read my insightful Blog',
        'links': [ 'Home', 'Contact', 'Projects' ]
    },
    'Contact': {
        'title': 'Contact Me',
        'links': [ 'Home', 'Blog', 'Projects' ]
    },
    'Projects': {
        'title': 'I love Lamp!',
        'links': [ 'Home', 'Blog', 'Contact' ]
    }
};

var root = document.querySelector('#root');

function handleNavigation(params){
    State.active = capitalize(params.page);
  
  render(State); //eslint-disable-line
}

function render(state){
    root.innerHTML = `
          ${Navigation(state)}
          ${Header(state)}
          ${Content(state)}
          ${Footer(state)}

          `;

    greet();

    router.updatePageLinks();
}

render(State);

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();
