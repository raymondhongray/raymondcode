
$(document).ready(function(){
	intro();
	introY();
	$('#nav-btn').click(function(){
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
			$('#nav-btn-line,header')
			.removeClass('blue');
			$('#blue #nav-btn-line,#blue header')
			.addClass('blue');
			$('#green #nav-btn-line,#green header')
			.addClass('green');
			$('#yellow #nav-btn-line,#yellow header')
			.addClass('yellow');
			$('#pink #nav-btn-line,#pink header')
			.addClass('pink');
			$('.logo-img,.home-img').removeClass('active');
			$('.logo-img:nth-of-type(2),.home-img:nth-of-type(2)').addClass('active');
			navOpen = 0;
		}
	});

//     $('.content-blue').ripples({
// 	resolution: 512,
// 	dropRadius: 20,
// 	perturbance: 0.04,
// 	interactive: true

// });
//     setInterval(function() {
//         var $el = $('.content-blue');
//         var x = Math.random() * $el.outerWidth();
//         var y = Math.random() * $el.outerHeight();
//         var dropRadius = 20;
//         var strength = 0.04 + Math.random() * 0.04;

//         $el.ripples('drop', x, y, dropRadius, strength);
//     }, 300);


	/*rainy.js--------------------*/

	 // var image = document.getElementById('bg');
  //   image.onload = function() {
  //       var engine = new RainyDay({
  //           image: this,
  //           crop: [ 50, 50, 600, 400]
  //       }, document.getElementById('canvas'));
  //       engine.trail = engine.TRAIL_SMUDGE;
  //       engine.rain([ [30, 30, 0.1] ], 33);
  //   };



    /----------blue-------------/ 
    // intro();
    featherMove($('#feather-1'));
    featherMove($('#feather-2'));
    featherMove($('#feather-3'));
    featherMove($('#feather-4'));
    featherMove($('#feather-5'));
    featherMove($('#feather-6'));
    featherMove($('#feather-7'));
    featherMove($('#feather-8'));
    featherMove($('#feather-9'));

    bubbleMove($('#bubble-1'));
    bubbleMove($('#bubble-2'));
    bubbleMove($('#bubble-3'));
    bubbleMove($('#bubble-4'));
    bubbleMove($('#bubble-5'));
    bubbleMove($('#bubble-6'));
    bubbleMove($('#bubble-7'));
    bubbleMove($('#bubble-8'));
    bubbleMove($('#bubble-9'));

    lightMove($('#light-1'));
    lightMove($('#light-2'));
    lightMove($('#light-3'));
    lightMove($('#light-4'));
    lightMove($('#light-5'));
    lightMove($('#light-6'));
    lightMove($('#light-7'));
    lightMove($('#light-8'));
    lightMove($('#light-9'));

    dropMove($('#drop-1'));
    dropMove($('#drop-2'));
    dropMove($('#drop-3'));
    dropMove($('#drop-4'));
    dropMove($('#drop-5'));
    dropMove($('#drop-6'));
    dropMove($('#drop-7'));
    dropMove($('#drop-8'));
    dropMove($('#drop-9'));
    dropMove($('#drop-10'));
    dropMove($('#drop-11'));
    dropMove($('#drop-12'));

});

	/----------yellow-------------------/ 

// function intro(){
// 	$('#yellow .catch')
// 	.css({top:'-100px'})
// 	.animate({top:'50%'},3000,'easeOutBounce');
// }

function dropMove(item){
	console.log(item);
    var start = Math.random()*1000;
	var destination = start+Math.random()*20;
	var duration = Math.floor(Math.random()*10)*5000;
	var delayTime = Math.floor(Math.random()*10)*100;
	console.log(duration);
	console.log(delayTime);
	item
	.find('.slide')
	.css({top:'-150px',left:start-30+'px',opacity:1,height:'0px'})
	.delay(delayTime)
	.animate({height:'167px',opacity:0},duration,'easeOutQuart');

	item
	.stop()
	.css({top:'-100px',left:start+'px'})
	.delay(delayTime)
	.animate({top:'100%'},duration,'easeOutQuart')
	.queue(function(){
		dropMove(item)
	});
}

function featherMove(item){
	console.log(item);
    var start = Math.random()*100;
	var destination = Math.random()*100;
	var duration = Math.floor(Math.random()*10)*3000;
	var delayTime = Math.floor(Math.random()*10)*400;
	console.log(duration);
	console.log(delayTime);
	item
	.stop()
	.css({top:'-100px',left:start+'%'})
	.delay(delayTime)
	.animate({top:'100%', left:destination+'%'},duration,'easeOutCubic')
	.queue(function(){
		featherMove(item)
	});
}

function bubbleMove(item){
	console.log(item);
    var start = Math.random()*100;
	var destination = Math.random()*100;
	var duration = Math.floor(Math.random()*10)*3000;
	var delayTime = Math.floor(Math.random()*10)*400;
	console.log(duration);
	console.log(delayTime);
	item
	.stop()
	.css({top:'100%',left:start+'%'})
	.delay(delayTime)
	.animate({top:'-300px',left:destination+'%'},duration,'easeOutCubic')
	.queue(function(){
		bubbleMove(item)
	});
}

function lightMove(item){
	console.log(item);
    var topStart = Math.random()*100;
    var leftStart = Math.random()*100;
	var destination = Math.random()*100;
	// var duration = Math.floor(Math.random()*10+1)*500;
	var duration = 1000;
	var delayTime = Math.floor(Math.random()*10)*100;
	console.log('duration: '+duration);
	console.log(delayTime);
	item
	.stop()
	.css({opacity:0,top:topStart+'%'})
	.delay(delayTime)
	.animate({opacity:1},duration,'easeOutCubic')
	.animate({opacity:0},duration,'easeOutCubic')
	.queue(function(){
		lightMove(item)
	});
}

function intro(){
  $('.people').addClass('active')
  // only first background
  .delay(400)
  .queue(function(){
    $('.text').addClass('active')
    .delay(400)
    .queue(function(){
    	$('.experience-btn').addClass('active');
    });
  })
  
}
function introY(){
	$('#yellow .text')
	.css({top:'-100px'})
	.animate({top:'50px'},2000,'easeOutBounce');
}