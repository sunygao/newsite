import Config from 'config/config';
import CV from 'config/CV';
import Utils from 'components/utils';

export default class About extends Backbone.View.extend({
  el: '#about'
}) {
  initialize() {
    this.isOpen = false;    

    this.bindEvents();
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
    this.$el.addClass('show');
    $('#main-nav').addClass('about-open');
    $('body').addClass('no-scroll');
    this.isOpen = true;
  }

  close() {
    this.$el.removeClass('show');
    $('#main-nav').removeClass('about-open');
    $('body').removeClass('no-scroll');
    this.isOpen = true;
  }

}