import Config from 'config/config';
import CV from 'config/CV';

//video elements
export default class VideoArticle {
  constructor(options) {
    Object.assign(this, options);

    this.isPlaying = false;
    this.isLoading = false;
    this.offsetTop = null;
	  this.offsetBottom = null;
    this.offsetLoad = null;

    this.bindEvents();
    this.setSize();
  }

  bindEvents() {
    this.$videoEl.on('canplay', () => {
      this.$videoEl.addClass('isLoaded');
    });
  }

  load() {
    if(this.isLoading) return;

    this.isLoading = true;
    this.$videoEl[0].load();
  }

  setSize() {
  	//set the container size based on image dimensions
  	let paddingBottom = 100 * (this.height/this.width);
  	this.$el.css('padding-bottom', paddingBottom + '%');
  }

  getOffset() {
  	let windowHeight = CV.viewport.height;

  	this.offsetTop = Math.round(this.$el.offset().top  - windowHeight / 2);
	  this.offsetBottom = Math.round(this.$el.offset().top + this.$el.outerHeight());
	  this.offsetLoad = Math.round(this.offsetTop  - windowHeight);
  }

  onScroll() {
    if(CV.scroll.y >= this.offsetLoad) {
      this.load();
    }

  	if(CV.scroll.y >= this.offsetTop && CV.scroll.y < this.offsetBottom) {
      this.play();
  	}

    if(CV.scroll.y < this.offsetTop || CV.scroll.y > this.offsetBottom) {
      this.pause();
    }
  }

  onResize() {
  	this.getOffset();
  }

  play() {
    if(this.isPlaying) return;
    this.isPlaying = true;
    this.$videoEl[0].play();
  }

  pause() {
    if(!this.isPlaying) return;
    this.isPlaying = false;
    this.$videoEl[0].pause();
  }


  dispose() {
    this.offsetTop = null;
	   this.offsetBottom = null;
	   this.offsetLoad = null;
  }

}
