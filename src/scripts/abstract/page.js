import Config from 'config/config';
import CV from 'config/CV';
import Utils from 'components/utils';
import Event from 'components/event-emitter';

export default class Page extends Backbone.View.extend({

}) {
  initialize() {
    if(CV.isTouchDevice) { //touch devices
      CV.animate = false;  
      $('html').addClass('is-touch');
      $('body').scrollTop(0);
    } else { //desktop
      CV.animate = true;
    }

    if(CV.isIE !== -1) {
      $('html').addClass('is-ie-' + CV.isIE);
    }

    this.touchThreshold = 5;

    //elements used for tracking scroll position
    this.$window = $(window);

    //shared components
    this.components = [];

    this.subviews = [];

    this.initSubviews();

    this.initComponents();

    this.bindEvents();    

    this.onResize();

    this.onScroll();
  }

  initComponents() {
  
  }

  initSubviews() {

  }

  bindEvents() {  
    window.requestAnimationFrame(_onRAF.bind(this));

    window.addEventListener(
      'resize', 
      _.debounce($.proxy(function () {
          this.onResize();
      }, this), Config.throttle.resize));

    window.addEventListener(
      'scroll', 
      _.debounce($.proxy(function () {
          this.onScroll();
      }, this), Config.throttle.scroll));

    $(document.body).on('touchstart', $.proxy(function(e) {
      this.onTouchStart(e);
    }, this));

    $(document.body).on('touchmove', $.proxy(function(e) {
      this.onTouchMove(e);
    }, this));

    $(document.body).on('touchend', $.proxy(function(e) {
      this.onTouchEnd(e);
    }, this));   

    $(document.body).on('scroll', $.proxy(function(e) {
      this.onTouchEnd(e);
    }, this));  


    $('#open-about').on('click', $.proxy(function(e) {
      e.preventDefault();
      this.openAbout();
    }, this));

    $('#close-about').on('click', $.proxy(function(e) {
      e.preventDefault();
      this.closeAbout();
    }, this));
  }    

  onResize() {
    CV.viewport.width  = window.innerWidth; 
    CV.viewport.height = window.innerHeight;    

    if(CV.viewport.width > Config.bkptMed) {
      CV.bkpt = 'lrg';
    } else if(CV.viewport.width > Config.bkptSml){
      CV.bkpt = 'med';
    } else{
      CV.bkpt = 'sml';
    }

     _.forEach(this.components, function(el) {
      if(el && el.onResize) {
        el.onResize();
      }
    });

    _.forEach(this.subviews, function(el) {
      if(el && el.onResize) {
        el.onResize();
      }
    });

  }

  onScroll() {
    if(CV.isTouchDevice) {
      CV.scroll.y = -this.$main.offset().top;
    } else {
      CV.scroll.y = window.pageYOffset;
    }
  }

  onTouchStart(e) {
    CV.touch.direction = null;

    CV.touch.x = CV.touch.startX = e.touches[0].clientX;
    CV.touch.y = CV.touch.startY = e.touches[0].clientY;
    CV.touch.deltaX = 0;
    CV.touch.deltaY = 0;
  }

  onTouchMove(e) {
    CV.touch.x = e.touches[0].clientX;
    CV.touch.y = e.touches[0].clientY;

    CV.touch.deltaX = CV.touch.x - CV.touch.startX;
    CV.touch.deltaY = CV.touch.y - CV.touch.startY;

    CV.touch.startX = CV.touch.x;
    CV.touch.startY = CV.touch.y;


    if(Math.abs(CV.touch.deltaX) < this.touchThreshold) {
      return;
    }

    if(Math.abs(CV.touch.deltaX) > Math.abs(CV.touch.deltaY)) {
      CV.touch.direction = 'horizontal';
    } else {
      CV.touch.direction = 'vertical';
    }
  }

  onTouchEnd(e) {
    CV.touch.direction == null;
  }

  onRAF() {
    _.forEach(this.components, function(el) {
      if(el && el.onRAF) {
        el.onRAF();
      }
    });

    _.forEach(this.subviews, function(el) {
      if(el && el.onRAF) {
        el.onRAF();
      }
    });
  }

  openAbout() {       
    $('#about').addClass('show');
    $('#main-nav').addClass('about-open');
    $('body').addClass('no-scroll');
  }

  closeAbout() {
    $('#about').removeClass('show');
    $('#main-nav').removeClass('about-open');
    $('body').removeClass('no-scroll');
  }
}


let _isIE = function() {
  return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null)));
}
let _onRAF = function() {
  this.onRAF();
  window.requestAnimationFrame(_onRAF.bind(this));
}