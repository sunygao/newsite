import Config from 'config/config';
import CV from 'config/CV';

//Work images, handles lazy load
export default class ImageArticle {
  constructor(options) {
    Object.assign(this, options);

    this.isLoaded = false;
    this.offsetTop = null;
	this.offsetBottom = null;
	this.offsetLoad = null;

	this.setSize();
    this.getOffset();
  }

  setSize() {
  	//set the container size based on image dimensions
  	let paddingBottom = 100 * (this.height/this.width);
	this.$el.css('padding-bottom', paddingBottom + '%');
  }

  getOffset() {
  	let windowHeight = CV.viewport.height;

  	this.offsetTop = Math.round(this.$el.offset().top);
	this.offsetBottom = Math.round(this.offsetTop + this.$el.height());
	this.offsetLoad = Math.round(this.offsetTop  - windowHeight);
  }

  onScroll() {
  	if(CV.scroll.y >= this.offsetLoad && !this.isLoaded) {
  		this.load();
  	}
  }

  onResize() {
  	this.getOffset();
  }

  load() {
  	let img = new Image;
	img.onload = () => {
		this.isLoaded = true;
		this.$imageEl.attr('src', this.src).addClass('isLoaded');
	}
	img.src = this.src;
  
   }

  dispose() {
  	this.isLoaded = false;
    this.offsetTop = null;
	this.offsetBottom = null;
	this.offsetLoad = null;
  }

}
