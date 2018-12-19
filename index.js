import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import { capitalize } from 'lodash';

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


class Store{
    constructor(state){
        this.listener = () => {};
        this.state = state;
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        render(this.state); // eslint-disable-line
    }

    addListener(listener){
        this.listener = listener;
    }
}

var store = new Store(State); // eslint-disable-line

function handleNavigation(params){
    store.dispatch((state) => {
        state.active = capitalize(params.page);
  
        return state;
    });
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

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => store.dispatch((state) => {
        state.posts = posts;

        return state;
    }));