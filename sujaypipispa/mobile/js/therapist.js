var dot = $('.nav-dot'),
    dots = [$('#dot-1'),$('#dot-2'),$('#dot-3'),$('#dot-4')];
var indexForNav = 0;

$(document).ready(function(){



	$('#content').fullpage({

		menu: true,
		anchors:['index'],
		slidesNavigation: true,
		navigationPosition: 'right',
		// 水平loop關閉否
		loopHorizontal: true,
		continuousVertical: false,

		easing: 'easeInQuart',
		easingcss3: 'ease',

		sectionSelector: '.section',
		slideSelector: '.slide',
		autoScrolling: false,
		css3: true,

	    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
	    },
	    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
	    	indexForNav = nextSlideIndex;
	    	console.log(indexForNav);
	        dots[nextSlideIndex].addClass('active');
	        dots[slideIndex].removeClass('active');
	        switch(nextSlideIndex)
	        {
	        	case 0:
        			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
        			.removeClass('pink').removeClass('green').removeClass('yellow')
        			.addClass('blue');
        			$('.logo-img,.home-img').removeClass('active');
        			$('#logo-img-1,#home-img-1').addClass('active');

        			// $('.logo-img:nth-of-type(1)').addclass('active');
        			
        			break;
        		case 1:
        			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
        			.removeClass('pink').removeClass('blue').removeClass('yellow')
        			.addClass('green');
        			$('.logo-img,.home-img').removeClass('active');
        			$('#logo-img-2,#home-img-2').addClass('active');
        			
        			break;
    			case 2:
        			
        			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
        			.removeClass('pink').removeClass('green').removeClass('blue')
        			.addClass('yellow');
        			$('.logo-img,.home-img').removeClass('active');
        			$('#logo-img-3,#home-img-3').addClass('active');
        			
        			break;
    			case 3:
        			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
        			.removeClass('blue').removeClass('green').removeClass('yellow')
        			.addClass('pink');
        			$('.logo-img,.home-img').removeClass('active');
        			$('#logo-img-4,#home-img-4').addClass('active');
        			
        			break;	
	        }
	}
  });


	$('#nav-btn').click(function(){
		console.log('click');
		if(navOpen == 0){
			$('#nav-btn-line,header')
			.removeClass('blue')
			.removeClass('pink')
			.removeClass('green')
			.removeClass('yellow')
			.addClass('blue');
			$('.logo-img,.home-img').removeClass('active');
			$('.logo-img:nth-of-type(1),.home-img:nth-of-type(1)').addClass('active');

			navOpen = 1;
		}
		else if(navOpen == 1){

			switch(indexForNav)
	        {
        	case 0:
    			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
    			.removeClass('pink').removeClass('green').removeClass('yellow')
    			.addClass('blue');
    			$('.logo-img,.home-img').removeClass('active');
    			$('#logo-img-1,#home-img-1').addClass('active');

    			// $('.logo-img:nth-of-type(1)').addclass('active');
    			
    			break;
    		case 1:
    			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
    			.removeClass('pink').removeClass('blue').removeClass('yellow')
    			.addClass('green');
    			$('.logo-img,.home-img').removeClass('active');
    			$('#logo-img-2,#home-img-2').addClass('active');
    			
    			break;
			case 2:
    			
    			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
    			.removeClass('pink').removeClass('green').removeClass('blue')
    			.addClass('yellow');
    			$('.logo-img,.home-img').removeClass('active');
    			$('#logo-img-3,#home-img-3').addClass('active');
    			
    			break;
			case 3:
    			$('#wrap,header,.nav-dot,#nav-btn-line,#nav-btn-line:before,#nav-btn-line:after')
    			.removeClass('blue').removeClass('green').removeClass('yellow')
    			.addClass('pink');
    			$('.logo-img,.home-img').removeClass('active');
    			$('#logo-img-4,#home-img-4').addClass('active');
    			
    			break;	
	        }

	        navOpen = 0;
		}
	});
});

$('.nav-dot').click(function(){
    if( !$(this).hasClass('active') )
    {
    	$.fn.fullpage.moveTo( 'index', $(this).index() );
    }
    console.log('dot');
});
$('#arrow-right').click(function(){
  console.log('left');
  $.fn.fullpage.moveSlideRight();
});
$('#arrow-left').click(function(){
  $.fn.fullpage.moveSlideLeft();
});