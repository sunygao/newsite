import CV from 'config/CV';
import $ from 'jquery';
import { TimelineMax, Power4 } from 'gsap';

export default class About extends Backbone.View.extend({
  el: '#about'
}) {
  initialize() {
    this.isOpen = false;    

    this.headline = this.$el.find('.about-header');
    this.links = this.$el.find('.links a');
    this.rule = this.$el.find('.links span');
    this.text = this.$el.find('.text-wrapper');

    let _this = this;

    this.introTimeline = new TimelineMax({
      paused: true,
      ease: Power4.easeOut,
      onComplete: function() {
        _this.onShown();
      }
      
    });

    this.outroTimeline = new TimelineMax({
      paused: true,
      ease: Power4.easeOut,
      onComplete: function() {
        _this.onHidden();
      }
    });

    this.createTimeline();
  }

  createTimeline() {
    this.introTimeline.fromTo(this.headline, .5, {
      opacity: 0,
      y: 10,
      skewX: '-2deg',
      skewY: '-2deg'
    },
    {
      opacity: 1,
      y: 0,
      skewX: '0deg',
      skewY: '0deg'
    }, .2);

    this.introTimeline.fromTo(this.rule, .5, {
      opacity: 0,
      x: -10,
      y: 0
    },
    {
      opacity: 1,
      x: 0,
      y: 0
    }, .2);

    this.introTimeline.staggerFromTo(this.links, .2, {
      opacity: 0,
      y: 5,
      skewX: '-2deg',
      skewY: '-2deg'
    },
    {
      opacity: 1,
      y: 0,
      skewX: '0deg',
      skewY: '0deg'
    }, .01, '-=.3');

    this.introTimeline.fromTo(this.text, .2, {
      opacity: 0,
      x: -10,
      y: 0
    },
    {
      opacity: 1,
      x: 0,
      y: 0
    }, '-=.3');

    this.outroTimeline.to([this.headline, this.rule, this.links, this.text], .2, {
      opacity: 0,
      y: 10
    });
  }



  toggleAbout() {
    if(this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  
  }

  open() {      
    if(this.isOpen) return;

    this.isOpen = true; 
    this.$el.addClass('show');
    $('#main-nav').addClass('about-open');
    $('html').addClass('no-scroll');
    if(CV.animate) {
      this.introTimeline.play();
    } else {
      this.introTimeline.progress(1);
    }
  }

  close() {
    if(!this.isOpen) return;

    if(CV.animate) {
      this.outroTimeline.progress(0).play();
    } else {
      this.outroTimeline.progress(1);
    }
  }

  onShown() {

  }

  onHidden() {
    this.$el.removeClass('show');
    $('#main-nav').removeClass('about-open');
    $('html').removeClass('no-scroll');
    this.isOpen = false;
    this.introTimeline.pause(0);
  }

}