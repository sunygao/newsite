import CV from 'config/CV';
import Page from 'abstract/page';
import Template from 'thirdEye.pug';
import $ from 'jquery';


export default class ThirdEye extends Page{

	initialize(options) {
		super.initialize(options);
		
        var video = document.getElementById('video')
        video.load()
        video.addEventListener('canplay', function() {
            video.play()
        })
	}	



}




