import Config from 'config/config';
import CV from 'config/CV';
import Utils from 'components/utils';

export default class Page extends Backbone.View.extend({

}) {
  initialize(data, params) {
    //shared components
    this.data = data;
    
    this.params = params;

    this.components = [];

    this.subviews = [];

    this.footer = $('footer');
  }

  createTimeline() {
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

    this.outroTimeline = new TimelineMax({
      paused: true,
      ease: Power4.easeOut,
      onComplete: function() {
        _this.onHidden();
      }
    });

    return this.introTimeline;

  }

  animateIn() {
    window.scrollTo(0, 0);

    this.footer.addClass('hidden');

    //play the intro timeline
    if(this.introTimeline) {
      if(CV.animate) {
        this.introTimeline.play();
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
        this.outroTimeline.play();
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