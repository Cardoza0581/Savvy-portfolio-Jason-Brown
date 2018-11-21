var userName =  prompt('What is your name?');
var title = document.querySelector('h1');

var greet = function greet(){
    if(!userName){
        userName = prompt('What is you name, for real this time?');
  
        greet();
    }
    else{
        title.textContent += ', ' + userName;
    }
};
  
greet();