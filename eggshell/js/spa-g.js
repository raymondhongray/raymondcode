var videoTime = 0;
var setVideoTime = 3;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var src1 = 'xnzNV-wY6W0';

function onYouTubeIframeAPIReady(){
      
      console.log('youtube');
      // videoPic = new YT.Player('video-pic', {
      //     height: '100%',
      //     width: '100%',
      //     playerVars: {'controls': 0,'showinfo': 0 },
      //     videoId: src1,
      //     events: {
      //         'onReady': onPlayerReady,
      //         'onStateChange': onPlayerStateChange
      //     }
      // });
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
		// videoPic.pauseVideo();
}
function onPlayerStateChange(event) {
    if(playerb.getPlayerState() == 0){
    	$('.popup').fadeOut();
    	// videoPic.seekTo(setVideoTime);
    }
    else if(playerb.getPlayerState() == 1){
      ga( 'send', 'event', 'mobile次頁-滑順溜溜館', 'Click', '播放影片2' );
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
	// $('.popup').hide(500);

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
        link: window.location.hostname+'/youtubeg.html',
        description: '全亞洲第一間PIPI SPA中心館長到底在堅持什麼？全天下最極致的滑順體驗，他找的到嗎？',
        // caption: '大家都愛擦屁屁',
        picture: window.location.hostname+"/img/spa/share-g.jpg"
      }, function(response){});
      console.log('share');
  });

})

function videoClose(){
	$('.popup').fadeOut();
}