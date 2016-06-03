var featherSize = $('.feather').size();
var lightSize = $('.light').size();
var bubbleSize = $('.bubble').size();
var rippletSize = $('.ripple').size();
var width;
var moveCount = 0;
var moveThreshold = 20;
var newFeatherI = 1;
var newLightI = 1;
var newBubbleI = 1;
var newRippleI = 1;
var fixX = 50, fixY = 150;
var mouseX,mouseY,nowMouseX,nowMouseY,xGap,yGap;
var featherArray =['y_feather01.png','y_feather02.png','y_feather03.png'];
var lightArray =['p_light01.png','p_light02.png','p_light03.png'];
var bubbleArray =['g_bubble01.png','g_bubble02.png','g_bubble03.png'];
var rippleArray =['b_ripple01.jpg','b_ripple01.jpg','b_ripple01.jpg'];

$(document).ready(function(){
	alert('in');
	width = $(this).width();
	intro();
	introY();

	    for(i=1;i<=rippletSize;i++){
    	rippleMove($('#ripple-'+i));
    }

		$('#blue #content').mousemove(function(e){
			moveCount++;
			// console.log('moveCount: '+moveCount);
			if(moveCount ==10){
				var ripplePicN = Math.floor(Math.random()*3);
				$('.ripple-container').append(
				    	$('<div class="ripple-new" id="ripple-new-'+newRippleI+'">'
			    			+'<img src="img/experience/'+rippleArray[ripplePicN]+'">'
						+'</div>')
					);
				rippleAnimate($('#ripple-new-'+newRippleI),e);
				newRippleI++;
				moveCount = 0;
			}
		});

	   
    /*/----------blue-------------/*/ 

for(i=1;i<=featherSize;i++){
    	featherMove($('#feather-'+i));
    }
$('#yellow #content').mousemove(function(e){
		moveCount++;
    	if(moveCount == moveThreshold){
	    	var featherPicN = Math.floor(Math.random()*3);
	    	$('.feather-container').append(
			    	$('<div class="feather-new" id="feather-new-'+newFeatherI+'">'
		    			+'<img src="img/experience/'+featherArray[featherPicN]+'">'
					+'</div>')

	    		);
	    	newFeatherMove($('#feather-new-'+newFeatherI),e);
	    	newFeatherI++;
	    	moveCount = 0;
    	}

});


	/------------yellow--------------------/ 
		
    for(i=1;i<=lightSize;i++){
    	lightMove($('#light-'+i));
    }

		$('#pink #content').mousemove(function(e){
			moveCount++;
			console.log(moveCount);
			if(moveCount ==10){
				var lightPicN = Math.floor(Math.random()*3);
				$('.light-container').append(
				    	$('<div class="light-new" id="light-new-'+newLightI+'">'
			    			+'<img src="img/experience/'+lightArray[lightPicN]+'">'
						+'</div>')
					);
				lightAnimate($('#light-new-'+newLightI),e);
				newLightI++;
				moveCount = 0;
			}
		});

	/*------------pink--------------------*/

$('#green #content').mousemove(function(e){
		moveCount++;
    	if(moveCount ==20){
	    	var bubblePicN = Math.floor(Math.random()*3);
	    	$('.bubble-container').append(
			    	$('<div class="bubble-new" id="bubble-new-'+newBubbleI+'">'
		    			+'<img src="img/experience/'+bubbleArray[bubblePicN]+'">'
					+'</div>')
	    		);
	    	newBubbleMove($('#bubble-new-'+newBubbleI),e);
	    	newBubbleI++;
	    	moveCount = 0;
    	}
    			
    });

});
	/*------------green--------------------*/

function introY(){
	$('#yellow .catch')
	.css({top:'-100px'})
	.animate({top:'50%'},3000,'easeOutBounce');
}

function featherMove(item){
    var start = Math.random()*100;
	var destination = Math.random()*100;
	var duration = Math.floor(Math.random()*10)*3000;
	var delayTime = Math.floor(Math.random()*10)*400;
	item
	// .each()
	.stop()
	.css({top:'-100px',left:start+'%'})
	.delay(delayTime)
	.animate({top:'100%', left:destination+'%'},duration,'easeOutCubic')
	.queue(function(){
		featherMove(item)
	});
}

function newFeatherMove(item,e){
    mouseX = e.originalEvent.clientX;
    mouseY = e.originalEvent.clientY;
    var start = mouseX;
	var destination = start+Math.random()*300*(Math.random()>0.5?1:-1);
	var duration = Math.floor(Math.random()*10)*4000;
	var delayTime = Math.floor(Math.random()*10)*400;
	console.log(duration);
	console.log(delayTime);
	item
	.stop()
	.css({top:'-100px',left:start+'px'})
	.animate({top:'100%', left:destination+'px'},duration,'easeOutQuint');
	setTimeout(function(){
		item.detach();
	},duration);
}

function lightMove(item){
	console.log('LM');
	console.log(item);
    var topStart = Math.random()*100;
    var leftStart = Math.random()*100;
	// var destination = 2000;
	var duration = Math.floor(Math.random()*10)*500;
	var delayTime = 2000+Math.floor(Math.random()*10)*100;
	console.log('duration '+duration);
	console.log('delayTime '+delayTime);
	item
	.stop()
	.css({top:topStart+'%',left:leftStart+'%'})
	.delay(delayTime)
	.animate({opacity:1},duration,'easeOutCubic')
	.animate({opacity:0},duration,'easeOutCubic')
	.queue(function(){
		lightMove(item)
	});
}

function newLightMove(item){
	console.log('LM');
	console.log(item);
    var topStart = Math.random()*100;
    var leftStart = Math.random()*100;
	var destination = Math.random()*100;
	var duration = 500;
	var delayTime = Math.floor(Math.random()*10)*400;
	console.log(duration);
	console.log(delayTime);
	item
	.stop()
	.css({opacity:0,top:topStart+'%',left:leftStart+'%'})
	.animate({opacity:1},duration,'easeOutCubic')
	.animate({opacity:0},duration,'easeOutCubic');
	setTimeout(function(){
		item.detach();
	},duration);
	

}

function bubbleMove(item){
    var start = Math.random()*100;
	var destination = Math.random()*100;
	var duration = Math.floor(Math.random()*10)*3000;
	var delayTime = Math.floor(Math.random()*10)*400;
	console.log(duration);
	console.log(delayTime);
	item
	// .each()
	.stop()
	.css({bottom:'-100px',left:start+'%'})
	.delay(delayTime)
	.animate({bottom:'100%', left:destination+'%'},duration,'easeOutCubic')
	.queue(function(){
		bubbleMove(item)
	});
}

function newBubbleMove(item,e){
    // var start = Math.random()*100;
    mouseX = e.originalEvent.clientX;
    mouseY = e.originalEvent.clientY;
    var start = mouseX;
	var destination = start+Math.random()*10;
	var duration = Math.floor(Math.random()*10)*3000;
	var delayTime = Math.floor(Math.random()*10)*400;
	console.log("left: "+start);
	console.log('nowMouseX: '+nowMouseX);
	item
	// .each()
	.stop()
	.css({bottom:'-100px',left:mouseX+'px'})
	.animate({bottom:'130%', left:destination+'px'},duration,'easeOutCubic');
	setTimeout(function(){
		item.detach();
	},duration);
	
}

function intro(){
  $('.people').addClass('active')
  // only first background
  .delay(400)
  .queue(function(){
    $('.catch').addClass('active')
    .delay(400)
    .queue(function(){
    	$('.e-btn').addClass('active');
    });
  })
  
}

function lightAnimate(item,e){
  mouseX = e.originalEvent.clientX;
  mouseY = e.originalEvent.clientY;

  	console.log(item);
  	item
  	.css({left:mouseX-fixX+'px',top:mouseY+'px'})
  	.animate({'opacity':1},1000)
  	.animate({'opacity':0},1000)
  	console.log('y: '+mouseY);
  	console.log(item.css('top'));
  	setTimeout(function(){
		item.detach();
	},2000);
  
}

function rippleAnimate(item,e){
  mouseX = e.originalEvent.clientX;
  mouseY = e.originalEvent.clientY;

  	console.log(item);
  	item
  	.css({left:mouseX-fixX+'px',top:mouseY+'px'})
  	.animate({'opacity':1},1000)
  	.animate({'opacity':0},1000)
  	console.log('y: '+mouseY);
  	console.log(item.css('top'));
  	setTimeout(function(){
		item.detach();
	},2000);
}

function rippleMove(item){
	console.log('LM');
	console.log(item);
    var topStart = Math.random()*100;
    var leftStart = Math.random()*100;
	// var destination = 2000;
	var duration = Math.floor(Math.random()*10)*500;
	var delayTime = 2000+Math.floor(Math.random()*10)*100;
	console.log('duration '+duration);
	console.log('delayTime '+delayTime);
	item
	.stop()
	.css({top:topStart+'%',left:leftStart+'%'})
	.delay(delayTime)
	.animate({opacity:1},duration,'easeOutCubic')
	.animate({opacity:0},duration,'easeOutCubic')
	.queue(function(){
		rippleMove(item)
	});
}

