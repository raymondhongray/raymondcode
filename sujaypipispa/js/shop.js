nowArticle = 1;
$(document).ready(function(){
	$('.flexslider').flexslider({
	   animation: "slide",
	   slideshow: true,
	   controlNav: "thumbnails",
	   controlsContainer: $(".custom-controls-container"),
       customDirectionNav: $(".custom-navigation a")

	 });
    articleLoop = setInterval(function(){
    	if(nowArticle==1){
    		$('#article1').fadeOut();
    		$('#article2').fadeIn();
    		nowArticle=2;
    	}
    	else if(nowArticle==2){
    		$('#article2').fadeOut();
    		$('#article1').fadeIn();
    		nowArticle=1;
    	}
    	
    },15000);
});

