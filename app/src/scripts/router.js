import Home from 'pages/home';

export default class Router extends Backbone.Router.extend({
    routes: {
    	"(/)" : "home",
    	"work(/)": "home",
    	"work/:case(/)": "workDetail",
    	"about(/)": "about"
    }
}) {
    initialize() {
        console.log('router initialized');

        var _this = this;

        $(document).on("click", "a[href^='/']", function(e) {

            e.preventDefault();

            var url = $(this).attr('href');

            _this.navigate(url, { trigger: true });
        });
    }

    home() {
    	console.log('homepage');
    	
	    var home = new Home({
	    	
	    });
    }

    workDetail() {
    	console.log('work detail page');
    }

    about () {
    	console.log('about page');
    }
};