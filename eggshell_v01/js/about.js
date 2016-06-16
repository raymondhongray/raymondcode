$(document).ready(function(){
	init();
});

function init(){
	$('.about-catch')
	.addClass('active')
	.delay(100)
	.queue(function(){
		$('.about-text')
		.addClass('active');
		$(this).dequeue();
	})
	.delay(500)
	.queue(function(){
		$('.about-main-pic')
		.addClass('active');
		$(this).dequeue();
	})
	.delay(1000)
	.queue(function(){
		$('.about-main')
		.addClass('active');
		$(this).dequeue();
	});
}