import Config from 'config/config';
import CV from 'config/CV';

export default class Section extends Backbone.View.extend({

}) {
  initialize(options) {
  
    this.$el = options.$el == undefined ? null : options.$el;
    this.isShown = false;
    this.sectionTL = null;

    this.beforeShow();
  }

  bindEvents() {

  }

  beforeShow() {
    if(!CV.animate) { //no animating in for touch devices
      this.onShown();
    } 
  }

  animateIn() {
    if(!this.isShown) {
      this.onShown();
    }
  }

  animateOut() {
    if(this.isShown) {
      this.onHidden();
    }
  }

  resetAnimation() {
    if(this.isShown) {
      this.onReset();
    }
  }

  onShown() {
    this.isShown = true;
  }

  onHidden() {
    this.isShown = false;
  }

  onReset() {
    this.isShown = false;
  }
  
  onRAF() {
    
  }

}

