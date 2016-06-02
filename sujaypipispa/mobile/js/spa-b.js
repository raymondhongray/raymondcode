var videoTime = 0;
var setVideoTime = 3;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var src1 = 'UFeb6jw7F_g';
var playerb;
function onYouTubeIframeAPIReady(){
      
      console.log('youtube');

       playerb = new YT.Player('player-main', {
          height: '100%',
          width: '100%',
          playerVars: {'controls': 1,'showinfo': 0 },
          videoId: src1,
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });

  }

function onPlayerReady(event) {
		// videoPic.seekTo(setVideoTime);
		// playerb.playVideo();
}
function onPlayerStateChange(event) {
    if(playerb.getPlayerState() == 0){
    	$('.popup').fadeOut();
    	// videoPic.seekTo(setVideoTime);
    }
    else if(playerb.getPlayerState() == 1){
      ga( 'send', 'event', 'mobile次頁-清爽水水館', 'Click', '播放影片2' );
    }
    else if(playerb.getPlayerState() == 2){
    	console.log('pause');
      // videoTime = playerb.getCurrentTime();
    	$('.popup').fadeOut();
    	// videoPic.seekTo(videoTime);
     //  videoPic.pauseVideo();
      // videoPic.mute();
    	console.log(videoTime);
    }
    

  }

$(document).ready(function(){
  
  // $('.popup').fadeIn();
  //   playerb.playVideo();


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

	$('.video-zone').click(function(){
		console.log('vz');
		$('.popup').fadeIn();
		// playerb.playVideo();
	});
  // .trigger('click');
  //  自動跳窗 

	$('.opacity').click(function(){
		playerb.pauseVideo();
		$('.popup').fadeOut();
	});

  $('.share-btn').click(function(){

    var whatBrowser = navigator.userAgent;
    if( whatBrowser.match('Line/') ){
        if( whatBrowser.match('iPhone') ){
            alert('請使用Safari瀏覽器分享網站'); // FB無法分享  
        }
        else{
            alert('請使用Safari瀏覽器分享網站'); // FB API無法分享  
        }
        return;
    }

    if( whatBrowser.match('CriOS') ){
        if( whatBrowser.match('iPhone') ){
            alert('請使用Safari瀏覽器分享網站'); // FB API無法分享  
        }
    }

      FB.ui({
        name: 'PIPI SPA中心館長出任務',
        method: 'feed',
        // link: window.location.hostname+'/youtubeb.html',
        link: window.location.hostname+'/youtubeb.html',
        description: '全亞洲第一間PIPI SPA中心館長到底在堅持什麼？全天下最極致的清爽體驗，他找的到嗎？',
        // caption: '大家都愛擦屁屁',
        picture: window.location.hostname+"/img/spa/share-b.jpg"
      }, function(response){});
  });

})

function videoClose(){
	$('.popup').fadeOut();
}