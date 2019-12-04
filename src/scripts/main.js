import "../scss/app.scss";
import Backbone from 'backbone';
import Router from 'router';

class Main {
  onReady() {
   	new Router();
    Backbone.history.start({ pushState: true });
  }
   
}

//init main when document is ready
var main = new Main();
document.addEventListener("DOMContentLoaded", () => { 
  setTimeout(() => main.onReady(), 800) 
}, false);
