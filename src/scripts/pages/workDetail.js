import CV from 'config/CV';

import Page from 'abstract/page';
import Template from 'workDetail.pug';

//page components
import ScrollAnimation from 'components/scrollAnimation';

//subviews
import ImageArticle from './subviews/imageArticle';

export default class WorkDetail extends Page {

	initialize(data, params) {
		super.initialize(data, params);
		this.slug = params.slug;
		this.nextData = params.nextData;

		this.template = Template;
		this.render();

		this.content = this.$el.find('.work-detail');
		this.headline = this.$el.find('.headline');
		this.hero = this.$el.find('.hero');
		this.details = this.$el.find('.project-details');
		this.images = this.$el.find('.project-images .image-wrapper');
		this.next = this.$el.find('.next-project');
		this.reachedEnd = false;

		this.imagesLoaded = 0;
		this.maxScroll = null;

		this.createTimeline();

		this.bindEvents();

	}	

	events() {
		return {

		}
	}
	initComponents() {
		super.initComponents();

		//this.components.push(this.scrollAnimation);
	}

	initSubviews() {
		super.initSubviews();

		_.each(this.images, (el, i) => {
			let $el = $(el),
			$imageEl = $el.find('img'),
			src = $imageEl.attr('data-src'),
			width = $imageEl.attr('data-width'),
			height = $imageEl.attr('data-height');

			let imageEl = new ImageArticle({ 
				$el: $el,
				$imageEl: $imageEl,
				src: src,
				width: width,
				height: height,
				onLoaded : this.onImageLoaded
			});
			this.subviews.push(imageEl);
		});

		// this.scrollAnimation = new ScrollAnimation({
	 //      sections: this.subviews
	 //    });
	}

	onImageLoaded = () => {
		//called when image container is set to correct dimensions
		//not when actual image element is loaded
		this.imagesLoaded++;
		if(this.imagesLoaded === this.images.length) {
			this.onAllLoaded();
		}
	}

	onAllLoaded() {
		//when all containers are set to correct dimensions
		//get the max scroll
		this.getMaxScroll();
	}

	getMaxScroll() {
		let contentH = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
		this.maxScroll = contentH - CV.viewport.height - 10;;
	}

	createTimeline() {
		super.createTimeline();

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
		});

		this.introTimeline.fromTo(this.hero, .5, {
			opacity: 0,
			y: 10		
		},
		{
			opacity: 1,
			y: 0
		});
		this.introTimeline.fromTo(this.details, .5, {
			opacity: 0,
			y: 10		
		},
		{
			opacity: 1,
			y: 0
		});

		this.introTimeline.fromTo(this.next, .5, {
			opacity: 0,
			display: 'none',
			x: 20		
		},
		{
			opacity: 1,
			display: 'block',
			x: 0
		}, '-=.2');


		this.outroTimeline.fromTo(this.next, .2, {
			opacity: 1,
			display: 'block',
			x: 0
		}, {
			opacity: 0,
			display: 'none',
			x: 20
		});

		this.outroTimeline.fromTo(this.headline, .2, {
			opacity: 1,
			y: 0,
			skewX: '0deg',
			skewY: '0deg'
		},{
			opacity: 0,
			y: 10,
			skewX: '-2deg',
			skewY: '-2deg'
		});


		this.outroTimeline.fromTo([this.hero, this.details], .5, {
			opacity: 1,
			y: 0
		},
		{
			opacity: 0,
			y: 10
		}, .2);
	}

	onShown() {
		super.onShown();
	 	this.bindNextHover();
	}

	onHidden() {
		super.onHidden();
	 	this.unbindNextHover();
	}

	render() {
		this.$el = $(this.template({
			data: this.data,
			slug: this.slug,
			nextData: this.nextData
		}));

		super.render();
	}

	onResize() {
		super.onResize();
		console.log('on resize');
		this.getMaxScroll();
	}

	onScroll() {
		super.onScroll();

		if(!this.maxScroll) return;

		let y = CV.scroll.y;

		if(y > this.maxScroll) {
			this.onReachedEnd();
		} else {
			this.onLeftEnd();
		}
	}
	onLeftEnd = () => {
		//not at the end, hide next project btn
		if(this.reachedEnd === false) return;
		this.reachedEnd = false;
		this.next.removeClass('show');
	}

	onReachedEnd = () => {
		//reached end of page
		if(this.reachedEnd === true) return;
		this.reachedEnd = true;
		this.next.addClass('show');
	}

	bindNextHover() {
		let _this = this;

		this.next.on('mouseover', function() {
			_this.onMouseOver();
		});

		this.next.on('mouseout', function() {
			_this.onMouseOff();
		});
	}

	unbindNextHover() {
		this.next.off('mouseover');

		this.next.off('mouseout');
	}

	onMouseOver() {
		this.content.addClass('inactive');
	}

	onMouseOff() {
		this.content.removeClass('inactive');
	}
}




