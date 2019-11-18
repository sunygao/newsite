import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';
import _ from 'lodash';
import Backbone from 'backbone';
import Config from 'config/config';
import CV from 'config/CV';
import Router from 'router';
import Home from 'pages/home';

class Main {
  onReady() {
   	new Router();
    Backbone.history.start({ pushState: true });
  }
   
}

//init main when document is ready
var main = module.exports = new Main();
$(document).ready(
	setTimeout(() => main.onReady(), 800) 
);

