import Page from 'abstract/page';
import data from 'home.json';
import Template from 'index.pug';

export default class Home extends Page{

	initialize() {
		super.initialize();

		this.template = Template;
		//this.render();

		this.workContainer = this.$el.find('section.work-list');
		this.imageContainer = this.$el.find('section.images');
		this.workLinks = [];
		this.images = [];
		this.currentWorkIndex = -1;
		
		let _this = this;

		_.each(this.workContainer.find('li'), function(el) {
			_this.workLinks.push($(el));
		});

		_.each(this.imageContainer.find('ul'), function(el) {
			_this.images.push($(el));
		});

		this.bindEvents();

		
		
	}	

	events() {
		return {

		}
	}

	render() {
		this.$el = $(this.template({data: data}));
		this.el = this.$el[0];
		$('#main-content').html(this.el);
	}

	bindEvents() {
		let _this = this;


		_.each(this.workLinks, function($el, i) {
			$el.on('mouseover', function() {
				_this.onMouseOver($el, i);
			});

			$el.on('mouseout', function() {
				_this.onMouseOff($el);
			});
		});

		
	}

	onMouseOff() {
		this.currentWorkIndex = -1;
		this.showCurrentWork();
		_.each(this.workLinks, function($el) {
			$el.removeClass('inactive');
		});
	}

	onMouseOver($el, i) {
		
		this.currentWorkIndex = i;
		
		_.each(_.without(this.workLinks, $el), function($el) {
			$el.addClass('inactive');
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
}




