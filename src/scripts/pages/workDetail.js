import Page from 'abstract/page';
import data from 'work.json';
import Template from 'workDetail.pug';

export default class Home extends Page{

	initialize(options) {
		super.initialize();

		this.slug = options.slug;
		this.pageData = data[this.slug];
		this.nextData = data[this.pageData.next];

		this.template = Template;
		//this.render();

		this.bindEvents();
		
	}	

	events() {
		return {

		}
	}

	render() {
		this.$el = $(this.template({
			data: data[this.slug],
			slug: this.slug,
			nextData: this.nextData
		}));
		this.el = this.$el[0];
		$('#main-content').html(this.el);
	}

	bindEvents() {
		
	}
}




