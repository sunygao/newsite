import CV from 'config/CV';
import $ from 'jquery';
import { TimelineMax, Power4 } from 'gsap'

export default class Page extends Backbone.View.extend({

}) {
  initialize(options) {
    //shared components
    this.data = options.data;
    this.pathname = options.pathname;

    this.components = [];

    this.subviews = [];

    this.footer = $('footer');
  }

  createIntroTimeline() {
    let _this = this;

    this.introTimeline = new TimelineMax({
      paused: true,
      ease: Power4.easeOut,
      onComplete: function() {
        _this.onShown();
      },
      onReverseComplete: function() {
        
      }
    });

    return this.introTimeline;
  }

  createOutroTimeline() {
    let _this = this;

    
    this.outroTimeline = new TimelineMax({
      paused: true,
      ease: Power4.easeOut,
      onComplete: function() {
        _this.onHidden();
      }
    });

    return this.outroTimeline;
  }

  animateIn() {
    window.scrollTo(0, 0);
    
    this.footer.addClass('hidden');

    //play the intro timeline
    if(this.introTimeline) {
      if(CV.animate) {
        this.introTimeline.progress(0).play();
      } else {
        this.introTimeline.progress(1);
      }
    } else {
      this.onShown();
    }
  }

  animateOut() {
    this.footer.addClass('hidden');

    if(this.outroTimeline) {
      if(CV.animate) {
        this.outroTimeline.progress(0).play();
      } else {
        this.outroTimeline.progress(1);
      }
    } else {
      this.onHidden();
    }
    //play the outro timeline
   
  }

  onShown() {
    this.trigger('animatedIn');
    this.footer.removeClass('hidden');
    this.initSubviews();
    this.initComponents();    
    this.onResize();

  }

  onHidden() {
    this.introTimeline.pause(0);
    this.dispose();
    this.trigger('animatedOut');
  }

  initComponents() {
  
  }

  initSubviews() {

  }

  onScroll() {
    _.forEach(this.components, function(el) {
      if(el && el.onScroll) {
       el.onScroll();
      }
    });

    _.forEach(this.subviews, function(el) {
      if(el && el.onScroll) {
       el.onScroll();
      }
    });
  }

  onScrollStop() {
    _.forEach(this.components, function(el) {
      if(el && el.onScrollStop) {
       el.onScrollStop();
      }
    });

    _.forEach(this.subviews, function(el) {
      if(el && el.onScrollStop) {
       el.onScrollStop();
      }
    });
  }

  onResize() {
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

  bindEvents() {  
   
  }    

  render() {
    this.el = this.$el[0];
    $('#main-content').html(this.el);
  }

  dispose() {
    _.forEach(this.components, function(el) {
      if(el.dispose) {
        el.dispose();
      }
    });

    _.forEach(this.subviews, function(el) {
      if(el.dispose) {
        el.dispose();
      }
    });

    this.components = [];
    this.subviews = [];
    this.remove();
  }
 


}