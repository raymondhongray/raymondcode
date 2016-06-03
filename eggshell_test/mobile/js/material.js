var hash = window.location.hash.substring(1);
var nowPage;

$(document).ready(function(){
		if(hash == 1){
			nowPage = 1;
			$('#control-zone a').attr('href','http://24h.pchome.com.tw/prod/DAAG0S-A9006FTJI');
			$('.flexslider').flexslider({
			animation:"slide",
			slideshow: false,
			manualControls: ".flex-control-nav li",
			directionNav: false,
			startAt: 1,
			after: function(){
				nowPage++;
				if(nowPage==2){
					nowPage =0;
				}
				if(nowPage==0){
					$('#control-zone a').attr('href','http://24h.pchome.com.tw/prod/DAAG0S-A9006FTJI');
					$('.spa-btn').click(function(){
						ga( 'send', 'event', 'mobile次頁-芳療產品', 'Click', '頂級舒適' );
					});
				}
				else{
					$('#control-zone a').attr('href','http://24h.pchome.com.tw/prod/DAAG0S-19006MIPC');
					$('.spa-btn').click(function(){
						ga( 'send', 'event', 'mobile次頁-芳療產品', 'Click', '清爽皂香' );
					});
				}
				console.log(nowPage);
			}
		});
	}
			else{
			nowPage = 0;
			$('#control-zone a').attr('href','http://24h.pchome.com.tw/prod/DAAG0S-19006MIPC');
			$('.flexslider').flexslider({
			animation:"slide",
			slideshow: false,
			manualControls: ".flex-control-nav li",
			directionNav: false,
			startAt: 0,
			after: function(){
				nowPage++;
				if(nowPage==2){
					nowPage =0;
				}
				if(nowPage==0){
					$('#control-zone a').attr('href','http://24h.pchome.com.tw/prod/DAAG0S-19006MIPC');
					$('.spa-btn').click(function(){
						ga( 'send', 'event', 'mobile次頁-芳療產品', 'Click', '清爽皂香' );
					});
				}
				else{
					$('#control-zone a').attr('href','http://24h.pchome.com.tw/prod/DAAG0S-A9006FTJI');
					$('.spa-btn').click(function(){
						ga( 'send', 'event', 'mobile次頁-芳療產品', 'Click', '頂級舒適' );
					});
				}
				console.log(nowPage);
			}

		});
	}
		
	
	intro();

	
})

function intro(){
	$('.product').addClass('active');
}