









// NO LONGER USED













import CV from 'config/CV';

export default class ScrollAnimation {
  constructor(options) {
    this.scrollTop = CV.scroll.y;
    this.sections = options.sections;
    this.sectionOffsets = [];
    this.curSectionIndex = -1;

    let _this = this;

    _(this.sections).forEach(function(el, i) {
      el.on('resize', function() {
        _this.onResize();
      });
    });
  }


  getOffsets() { //called by resize

    if( this.sections == null ){
      return;
    }

    let _this = this;

    _this.sectionOffsets = [];

    _(this.sections).forEach(function(el, i) {
      let $el = $(el.$el);
      let offsetReset = $el.offset().top - window.innerHeight;
      offsetReset = _.round(_.max([0, offsetReset]));

      let offsetTop;

      if(CV.viewport.height >= 950) {
        offsetTop = $el.offset().top - (window.innerHeight)  + ($el.height() * .5);
      } else {
        offsetTop = $el.offset().top - (window.innerHeight/2);
      }
      offsetTop = _.round(_.max([0, offsetTop]));

      let offsetPast = _.round($el.offset().top + $el.height());
      
      _this.sectionOffsets.push({
        $el: $el,
        offsetReset: offsetReset,
        offsetTop: offsetTop,
        offsetPast: offsetPast
      });
    });
  }

  onScroll() {
    if(!CV.animate || this.sections == null) {                
      return;
    }

    let y = CV.scroll.y;

    _(this.sectionOffsets).forEach((section, i) => {
      if(_.inRange(y, section.offsetTop, section.offsetPast)) {
        if(this.curSectionIndex == i || section.isActive) {
          return; 
        }
        section.isActive = true;
        this.curSectionIndex = i;
        this.activateSectionCurrent(i);


      } else if (y <= section.offsetReset) {
        section.isActive = false;
        this.activateSectionAhead(i); //ahead

      } else if (y > section.offsetPast) {
        section.isActive = false;
        this.activateSectionPast(i); 
      }
    });

  }

  onResize() {
    this.getOffsets();
    this.onScroll();
  }

  activateSectionAhead(sectionIndex) {
    this.sectionOffsets[sectionIndex].$el.removeClass('current').addClass('ahead');

     if(this.sections[sectionIndex].resetAnimation) {
      this.sections[sectionIndex].resetAnimation();
    }
  }

  activateSectionCurrent(sectionIndex) {
    this.sectionOffsets[sectionIndex].$el.removeClass('ahead').addClass('current');

    if(this.sections[sectionIndex].animateIn) {
      this.sections[sectionIndex].animateIn();
    }
  }

  activateSectionPast(sectionIndex) {
    if(this.sections[sectionIndex].animateOut) {
      this.sections[sectionIndex].animateOut();
    }
  }


  dispose() {
    this.sections = null;
    this.sectionOffsets = [];
    this.curSectionIndex = -1;
  }
}