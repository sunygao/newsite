import PageManager from 'controller/pageManager';

//page views
import Home from 'pages/home';
import WorkDetail from 'pages/workDetail';

//page json
import homeData from 'home.json';
import workData from 'work.json';

export default class Router extends Backbone.Router.extend({
    routes: {
    	"(/)" : "home",
    	"work(/)": "home",
    	"work/:case(/)": "workDetail"
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

        this.pageManager = new PageManager();
    }

    home() {
        this.pageManager.loadPage({
            view: Home,
            data: homeData
        });
    }

    workDetail(route) {
        this.pageManager.loadPage({
            view: WorkDetail,
            data: workData[route],
            params: {
                slug: route
            }
        });
    }
};