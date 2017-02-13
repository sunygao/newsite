import Page from 'abstract/page';
import data from 'work.json';
import Template from 'workDetail.pug';

//page components
import ScrollAnimation from 'components/scrollAnimation';

//subviews
import ImageArticle from './subviews/imageArticle';

export default class WorkDetail extends Page{

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

		this.createTimeline();

		this.bindEvents();

	}	

	events() {
		return {

		}
	}
	initComponents() {
		super.initComponents();

		this.components.push(this.scrollAnimation);

	}

	initSubviews() {
		super.initSubviews();
		let _this = this;

		_.each(this.images, function(el, i) {
			let imageEl = new ImageArticle({ $el: $(el) });
			_this.subviews.push(imageEl);
		});

		this.scrollAnimation = new ScrollAnimation({
	      sections: this.subviews
	    });
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




