import $ from 'jquery';
import _ from 'lodash';
import PageManager from 'controller/pageManager';
import Nav from 'components/nav';


//page views
import Home from 'pages/home';
import WorkDetail from 'pages/workDetail';

//home and web pages json
import homeData from 'home.json';
import { allWebObj, allWebArray } from 'web-projects';

//art pages json
// import artData from 'art.json';
// import { allArtObj, allArtArray } from 'art-projects';

const webPathname = 'web';
// const artPathname = 'art';

export default class Router extends Backbone.Router.extend({
    routes: {
    	"(/)" : "home",
    	// "work(/)": "home",
        // "work/:case(/)": "workDetail",
        "web(/)": "home",
        "web/:case(/)": "webDetail"
        // "art(/)": "art",
    	// "art/:case(/)": "artDetail"
    }
}) {
    initialize() {
        console.log('router initialized');

        this.pageManager = new PageManager();
        this.nav = new Nav();

        var _this = this;

        $(document).on("click", "a[href^='/']", function(e) {

            e.preventDefault();

            var url = $(this).attr('href');
            
            _this.nav.closeAbout();

            _this.navigate(url, { trigger: true });
        });

        //update nav classes
        this.on('route', function() {
            this.nav.onNavigate(this.getCurrentRoute())
        });
    }

    home() {
        this.pageManager.loadPage({
            meta: homeData,
            view: Home,
            data: allWebObj,
            pathname: webPathname
        });
    }

    // art() {
    //     this.pageManager.loadPage({
    //         meta: artData,
    //         view: Home,
    //         data: allArtObj,
    //         pathname: artPathname
    //     });
    // }


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

    // artDetail(route) {
    //     const next = this.getNext(route, allArtArray);
 
    //      this.pageManager.loadPage({
    //          view: WorkDetail,
    //          data: allArtObj[route],
    //          meta: allArtObj[route].meta,
    //          nextData: allArtObj[next],
    //          pathname: artPathname
    //      });
    //  }

     getCurrentRoute() {
        var Router = this,
            fragment = Backbone.history.fragment,
            routes = _.toPairs(Router.routes),
            route = null, params = null, matched;
    
        matched = _.find(routes, function(handler) {
            route = _.isRegExp(handler[0]) ? handler[0] : Router._routeToRegExp(handler[0]);
            return route.test(fragment);
        });
       
        if(matched) {
            // NEW: Extracts the params using the internal
            // function _extractParameters 
            params = Router._extractParameters(route, fragment);
            route = matched[1];
        }
    
        return {
            route : route,
            fragment : fragment,
            params : params
        };
    }
};