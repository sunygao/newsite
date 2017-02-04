import Page from 'abstract/page';
import data from 'work.json';
import Template from 'workDetail.pug';

export default class WorkDetail extends Page{

	initialize(data, params) {
		super.initialize(data, params);

		this.slug = params.slug;
		this.nextData = this.data.next;

		this.template = Template;
		// this.render();

		this.bindEvents();
	}	

	events() {
		return {

		}
	}

	render() {
		this.$el = $(this.template({
			data: this.data,
			slug: this.slug,
			nextData: this.nextData
		}));

		super.render();
	}

	bindEvents() {
		super.bindEvents();
	}
}




