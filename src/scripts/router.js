import PageManager from 'controller/pageManager';
import $ from 'jquery';

//page views
import Home from 'pages/home';
import WorkDetail from 'pages/workDetail';

//page json
import homeData from 'home.json';
import workData from 'work.json';
import { allWorkObj, allWorkArray } from 'projects';

export default class Router extends Backbone.Router.extend({
    routes: {
    	"(/)" : "home",
    	// "work(/)": "home",
        // "work/:case(/)": "workDetail",
        "web(/)": "home",
    	"web/:case(/)": "workDetail"
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
            meta: homeData,
            view: Home,
            data: allWorkObj
        });
    }

    getNext(route) {
        let next = null;

        allWorkArray.map((item, i) => {
            if(item == route) {
                next = i === allWorkArray.length - 1 ? next = 0 : i + 1
            }
        });

        //return the key of the next item
        return allWorkArray[next];
    }

    workDetail(route) {
       const next = this.getNext(route);

        this.pageManager.loadPage({
            view: WorkDetail,
            data: allWorkObj[route],
            meta: allWorkObj[route].meta,
            nextData: allWorkObj[next]
        });
    }
};