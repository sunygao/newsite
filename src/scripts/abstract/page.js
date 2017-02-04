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

    this.initSubviews();

    this.initComponents();

    this.createTimelines;
  }

  createTimelines() {

  }

  animateIn() {
    //play the intro timeline
    this.onShown();
  }

  animateOut() {
    //play the outro timeline
    this.dispose();
    this.trigger('animatedOut');
  }

  onShown() {

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