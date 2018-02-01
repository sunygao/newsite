import CV from 'config/CV';
import Page from 'abstract/page';
import Template from 'index.pug';

export default class Home extends Page{

	initialize(data, params) {
		super.initialize(data, params);
		
		this.template = Template;
		this.render();

		this.workContainer = this.$el.find('section.work-list');
		this.imageContainer = this.$el.find('section.images');
		//this.$workList = $(this.workContainer).find('ul');
		this.workLinks = [];
		//this.workLinksAnchor = []; //for scrolling skew affect, use the anchor instead of li to not interfere with tweenmax
		this.images = [];
		this.currentWorkIndex = -1;
		
		let _this = this;


		_.each(this.workContainer.find('li'), function(el) {
			_this.workLinks.push($(el));
			//_this.workLinksAnchor.push($(el).find('a'));
		});

		_.each(this.imageContainer.find('ul'), function(el) {
			_this.images.push($(el));
		});		

		this.createTimeline();

		this.bindEvents();
		
	}	

	createTimeline() {
		super.createTimeline();

		this.introTimeline.staggerFromTo(this.workLinks, .5, {
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
		}, .1);

		this.outroTimeline.staggerFromTo(this.workLinks, .5, {
			opacity: 1,
			y: 0,
			skewX: '0deg',
			skewY: '0deg'
		},
		{
			opacity: 0,
			y: 10,
			skewX: '-2deg',
			skewY: '-2deg'
		}, 0);
	}


	events() {
		return {

		}
	}

	render() {
		this.$el = $(this.template({data: this.data}));
		
		super.render();
	}

	bindEvents() {
		super.bindEvents();

		let _this = this;

		if(CV.animate) {
			_.each(this.workLinks, function($el, i) {
				$el.on('mouseover', function() {
					_this.onMouseOver($el, i);
				});

				$el.on('mouseout', function() {
					_this.onMouseOff($el);
				});
			});
		}

		
	}

	onMouseOff() {
		this.currentWorkIndex = -1;
		this.showCurrentWork();
		_.each(this.workLinks, function($el) {
			$el.find('a').removeClass('inactive');
		});
	}

	onMouseOver($el, i) {
		
		this.currentWorkIndex = i;
		
		_.each(_.without(this.workLinks, $el), function($el) {
			$el.find('a').addClass('inactive');
		});
		this.showCurrentWork();
	}

	showCurrentWork() {
		if(this.currentWorkIndex == -1) {
			_.each(this.images, function($el) {
				$el.removeClass('active');
			});
		} else {
			this.images[this.currentWorkIndex].addClass('active');
		}
	}

	animateOut() {
		_.each(this.images, function($el) {
			$el.removeClass('active');
		});
		super.animateOut();
	}

// 	onScroll() {
// 		super.onScroll();
// 		console.log('scrolling', CV.scroll.delta);
		
// 		let skew = CV.scroll.delta / 5 + 'deg';
// 		console.log(skew)


// 		TweenMax.set(this.$workList, {
// 			skewY: skew
// 		});
		
// 	}

// 	onScrollStop() {
// 		super.onScrollStop();
// //		console.log('scrollStopped');

// 		TweenMax.to(this.$workList, .1, {
// 			skewY: 0
// 		});
// 	}
}




