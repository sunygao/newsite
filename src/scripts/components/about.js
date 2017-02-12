import Config from 'config/config';
import CV from 'config/CV';
import Utils from 'components/utils';

export default class About extends Backbone.View.extend({
  el: '#about'
}) {
  initialize() {
    this.isOpen = false;    

    this.bindEvents();

    this.headline = this.$el.find('h2');
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
      x: -10
    },
    {
      opacity: 1,
      x: 1
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
    }, .05);

    this.introTimeline.fromTo(this.text, .2, {
      opacity: 0,
      x: -10
    },
    {
      opacity: 1,
      x: 1
    }, .2);

    this.outroTimeline.to([this.headline, this.rule, this.links, this.text], .2, {
      opacity: 0,
      y: 10
    });
  }


  bindEvents() {
     $('#open-about').on('click', $.proxy(function(e) {
      e.preventDefault();
      this.open();
    }, this));

    $('#close-about').on('click', $.proxy(function(e) {
      e.preventDefault();
      this.close();
    }, this));

    $('#main-nav h1 a').on('click', $.proxy(function(e) {
      this.close();
    }, this));
  }
  
  open() {      
    this.isOpen = true; 
    this.$el.addClass('show');
    $('#main-nav').addClass('about-open');
    $('html').addClass('no-scroll');
    this.introTimeline.play();
  }

  close() {
    this.outroTimeline.play();
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