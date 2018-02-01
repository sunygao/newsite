import CV from 'config/CV';
import Config from 'config/config';

import About from 'components/about';

export default class PageManager {
	constructor() {
		//backbone view els
		this.previousPageView = null;
		this.currentPageView = null;

		this.currentPageName  = "",
		this.previousPageAnimateComplete = false;
		this.footer = $('footer');
		this.init();

		this.scrollTimer = null;
		this.scrollDelta;

		this.bindEvents();
		
		this.onResize();

	this.setScroll();

	//this.loader = new Loader();
	this.aboutPage = new About();
	}

	init() {
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
	}

	bindEvents() {
		window.requestAnimationFrame(_onRAF.bind(this));

		window.addEventListener(
		  'resize', 
		  _.debounce($.proxy(function () {
			  this.onResize();
		  }, this), Config.throttle.resize));

		
		let lastScrollTop = 0;
		window.addEventListener('scroll', (e) => { 
			
			CV.scrollTicker = true;

			let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
		   	if(st == lastScrollTop) return;

		   	this.scrollDelta = st - lastScrollTop;

		   	lastScrollTop = st;

			this.setScroll();
			this.setScrollDelta();

			if(this.scrollTimer) {
				clearTimeout(this.scrollTimer);
				this.scrollTimer = null;
			} 

			this.scrollTimer = setTimeout(() => {
				CV.scrollTicker = false;
				this.onScrollStop();
			}, 100);
			
		}, false);

		//TODO test mousewheel

		// $(window).on('DOMMouseScroll wheel', (event) => {
		// 	if(!event.deltaY) return;
			
		// 	let scrollDirection;

		//  	if(event.deltaY > 0 ) {
		//     	scrollDirection = 'down';
		//   	} else {
		//     	scrollDirection = 'up';
		//   	}

		//   	CV.scrollDirection = scrollDirection;
		// });

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
	}

	setScroll() {
		CV.scroll.y = window.pageYOffset;
	}

	setScrollDelta() {
		CV.scroll.delta = this.scrollDelta;
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

	if(this.currentPageView && this.currentPageView.onResize) {
		this.currentPageView.onResize();
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
		//call raf on current page view
		if(this.currentPageView && this.currentPageView.onRAF) {
			this.currentPageView.onRAF();
		}

		if(CV.scrollTicker) {
			this.onScroll();
		} 
	}

	onScroll() {
		if(this.currentPageView && this.currentPageView.onScroll) {
			this.currentPageView.onScroll();
		}

	}

	onScrollStop() {
		if(this.currentPageView && this.currentPageView.onScrollStop) {
			this.currentPageView.onScrollStop();
		}

	}

	loadPage(options) {
		//this.footer.addClass('hide');

		let View = options.view,
		data = options.data,
		params = options.params,
		_this = this;

		if(this.aboutPage.isOpen) {
			this.aboutPage.close();
		}

		if($('body').hasClass('error')) {
			$('body').removeClass('error');
		}

		if(this.currentPageView == null) {//first time loading
			//load the assets here, for now, just timeout
			setTimeout(function() {
				_this.loadView(View, data, params);		
			}, 100);

		} else {//a previous page exists
			this.previousPageAnimateComplete = false;
			this.previousPageView = this.currentPageView;

			this.previousPageView.on('animatedOut', $.proxy(function() {
				setTimeout(function() { 
					_this.loadView(View, data, params);
				}, 100);
			}, this));

			this.previousPageView.animateOut();
		}
	}

	loadView(View, data, params) {
		this.currentPageView  = new View(data, params);
		this.currentPageView.animateIn();
		document.title = data.meta.title;
		// this.currentPageView.on('animatedIn', $.proxy(function() {
		// 	if(this.footer.hasClass('hide')) {
		// 		console.log('remove');
		// 		this.footer.removeClass('hide');
		// 	}
		// }, this));
	}

}


let _isIE = function() {
	return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null)));
}

let _onRAF = function() {
	this.onRAF();
	window.requestAnimationFrame(_onRAF.bind(this));
}
