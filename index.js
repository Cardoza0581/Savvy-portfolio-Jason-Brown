import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import { capitalize } from 'lodash';
import Store from './src/Store';
import { html, render } from 'lit-html';
var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);


var State = {
    'posts': [],
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

var store = new Store(State);

function handleNavigation(params){
    State.active = capitalize(params.page);
    store.dispatch((state) => {
        state.active = capitalize(params.page);
        
        return state;
    });
}

function App(state){
    return html`
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
}
function start(state){
    render(App(state), root);
}
store.addListener(start);
router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();

router.updatePageLinks();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => store.dispatch((state) => {
        state.posts = posts;
       
        return state;
    }));