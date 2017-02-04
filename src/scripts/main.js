import $ from 'expose?$!jquery';
import { TweenMax, TimelineMax } from 'TweenMax';
import _ from 'expose?_!underscore';
import Backbone from 'backbone-1.3.3';
import Config from 'config/config';
import CV from 'config/CV';
import Router from 'router';
import Home from 'pages/home';

class Main {
  onReady() {

   	$(document.body).on('keydown', function(e) {
   		if(e.keyCode == 71) {
   			$('#grid').toggle();
   		}
   	});

   	new Router();
    Backbone.history.start({ pushState: true });
  }
   
}

//init main when document is ready
var main = module.exports = new Main();
$(document).ready(main.onReady.bind(main));
