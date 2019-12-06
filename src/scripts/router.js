import PageManager from 'controller/pageManager';
import $ from 'jquery';

//page views
import Home from 'pages/home';
import WorkDetail from 'pages/workDetail';

//home and web pages json
import homeData from 'home.json';
import { allWebObj, allWebArray } from 'web-projects';

//art pages json
import artData from 'art.json';
import { allArtObj, allArtArray } from 'art-projects';


const webPathname = 'web';
const artPathname = 'art';

export default class Router extends Backbone.Router.extend({
    routes: {
    	"(/)" : "home",
    	// "work(/)": "home",
        // "work/:case(/)": "workDetail",
        "web(/)": "home",
        "web/:case(/)": "webDetail",
        "art(/)": "art",
    	"art/:case(/)": "artDetail"
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
            data: allWebObj,
            pathname: webPathname
        });
    }

    art() {
        this.pageManager.loadPage({
            meta: artData,
            view: Home,
            data: allArtObj,
            pathname: artPathname
        });
    }


    getNext(route, workList) {
        let next = null;

        if(workList.length < 2) return;

        workList.map((item, i) => {
            if(item == route) {
                next = i === workList.length - 1 ? next = 0 : i + 1
            }
        });

        //return the key of the next item
        return workList[next];
    }

    webDetail(route) {
       const next = this.getNext(route, allWebArray);

        this.pageManager.loadPage({
            view: WorkDetail,
            data: allWebObj[route],
            meta: allWebObj[route].meta,
            nextData: allWebObj[next],
            pathname: webPathname
        });
    }

    artDetail(route) {
        const next = this.getNext(route, allArtArray);
 
         this.pageManager.loadPage({
             view: WorkDetail,
             data: allArtObj[route],
             meta: allArtObj[route].meta,
             nextData: allArtObj[next],
             pathname: artPathname
         });
     }
};