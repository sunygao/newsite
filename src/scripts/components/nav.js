import $ from 'jquery';
import About from 'components/about';

export default class Nav extends Backbone.View.extend({
    el: '#main-nav'
}) {
    initialize() {
        this.aboutPage = new About();

        this.navLinks = Array.prototype.slice.call(this.el.getElementsByClassName('nav-link'));
 
        this.bindEvents();
    }

    closeAbout() {
        this.aboutPage.close();
    }

    onNavigate(currentRoute) {
        const pathname = currentRoute.fragment.split('/')[0];

        this.navLinks.map((el) => {
            el.classList.remove('active');  
            let href = el.getAttribute('href');
            
            if(pathname == href.split('/')[1] || pathname == 'web' && href == '/') {
                el.classList.add('active')
            }
        })
    }


    bindEvents() {
        $('#open-about').on('click', $.proxy(function(e) {
          e.preventDefault();
          this.aboutPage.toggleAbout();
        }, this));

        $('#main-nav h1 a').on('click', $.proxy(function(e) {
          this.closeAbout();
        }, this));
    }
}