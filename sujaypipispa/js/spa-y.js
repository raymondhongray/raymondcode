var count;
var mouseMoved = 0;
var isPlay = 1;
var moveCount = 0;
var isReplay = 0;
var isMute = 0;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var src1 = 'jPHyHyJknn0';
var player1;
// var src1 = 'XaMMfrpZdfs';

function onYouTubeIframeAPIReady(){
      
      console.log('youtube');
      player1 = new YT.Player('player-y', {
          height: '100%',
          width: '100%',
          playerVars: {'controls': 0,'showinfo': 0,'wmode': 'opaque' },
          videoId: src1,
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });


  }

function onPlayerReady(event) {
        event.target.playVideo();
}
function onPlayerStateChange(event) {

    if(event.data == YT.PlayerState.ENDED){
        whenEnd();
        // player2.seekTo(0);
        // player3.seekTo(0);
        // player4.seekTo(0);

    }
    else if(player1.getPlayerState() == 1){
      ga( 'send', 'event', '次頁-鬆厚綿綿館', 'Click', '播放影片' );
    }

  }


$(document).ready(function(){

  $('.share-btn').click(function(){
      FB.ui({
        name: 'PIPI SPA中心館長出任務',
        method: 'feed',
        // link: window.location.hostname+'/youtubeb.html',
        link: window.location.hostname+'/youtubey.html',
        description: '全亞洲第一間PIPI SPA中心館長到底在堅持什麼？全天下最舒適的觸感體驗，他找的到嗎？',
        // caption: '大家都愛擦屁屁',
        picture: window.location.hostname+"/img/spa/share-y.jpg"
      }, function(response){});
      console.log('share');
  });

  $('.play-btn').click(function(){

      if(isReplay==1)
      {
        isReplay = 0;
        $('.big-video').fadeOut();
        player1.playVideo();
        $('#blue .play-btn').find('img').attr('src','img/spa/b_stop.png');
        $('#green .play-btn').find('img').attr('src','img/spa/g_stop.png');
        $('#pink .play-btn').find('img').attr('src','img/spa/p_stop.png');
        $('#yellow .play-btn').find('img').attr('src','img/spa/y_stop.png');
      }
      else if(isPlay==1)
      {
        isPlay = 0;
        player1.pauseVideo();
        $('#blue .play-btn').find('img').attr('src','img/spa/b_play.png');
        $('#green .play-btn').find('img').attr('src','img/spa/g_play.png');
        $('#pink .play-btn').find('img').attr('src','img/spa/p_play.png');
        $('#yellow .play-btn').find('img').attr('src','img/spa/y_play.png');
      }
      else if(isPlay==0)
      {
        isPlay = 1;
        player1.playVideo();

        $('#blue .play-btn').find('img').attr('src','img/spa/b_stop.png');
        $('#green .play-btn').find('img').attr('src','img/spa/g_stop.png');
        $('#pink .play-btn').find('img').attr('src','img/spa/p_stop.png');
        $('#yellow .play-btn').find('img').attr('src','img/spa/y_stop.png');
        console.log('pause');
      }

  });
  $('#mute-btn').click(function(){
    if(isMute==0){
      isMute = 1;
      player1.mute();
      // $(this).find('img').attr('src','img/spa/unmute.png');
      $(this).find('img').css({top:'-25px'});
    }
    else{
      isMute = 0;
      player1.unMute();
      // $(this).find('img').attr('src','img/spa/mute.png');
      $(this).find('img').css({top:'0px'});
    }
    
  });
    
  $(document).mousemove(function(e){
    moveCount++;
    if(moveCount == 10){
      $('#iframe-wrap').css({'cursor':'default'});
      if(!mouseMoved){
          elementIn();
          clearTimeout(count);
          count = setTimeout(mouseNotMove,2000);
      }
      moveCount = 0;
    }

  });


});
function mouseNotMove(){
    mouseMoved = true;
    elementOut();
    $('#iframe-wrap').css({'cursor':'none'});
    setTimeout(function(){
        mouseMoved = false;
    },500);
  }

  function elementIn(){
    btnIn();
    borderIn();
  }

  function elementOut(){
    btnOut();
    borderOut();
  }

  function btnIn(){
    $('.spa-btn').fadeIn(1000);
  }

  function btnOut(){
    $('.spa-btn').fadeOut(1000);
  }

  function borderIn(){
    // $('header').addClass('active');
    // $('header').css('transform','translate(0,-100%)')
    $('header').stop().animate({'top':'0px'},1000);
    // $('footer').stop().animate({'bottom':'0px'},500);
    $('footer').css({'transform':'translateY(0px)'});
    $('#side-l').stop().animate({'left':'0px'},1000);
    $('#side-r').stop().animate({'right':'0px'},1000);
  }
  function borderOut(){
    // $('header').removeClass('active');
    // $('header').css('transform','translate(0,0)')
    $('header').stop().animate({'top':'-100px'},1000);
    // $('footer').stop().animate({'transform':'translateY(100px)'},500);
    $('footer').css({'transform':'translateY(100px)'});
    $('#side-l').stop().animate({'left':'-100px'},1000);
    $('#side-r').stop().animate({'right':'-100px'},1000);
  }

function whenEnd(){
  $('.big-video').fadeIn();
  elementIn();
  $('#blue .play-btn').find('img').attr('src','img/spa/replay_b.png');
  $('#green .play-btn').find('img').attr('src','img/spa/replay_g.png');
  $('#pink .play-btn').find('img').attr('src','img/spa/replay_p.png');
  $('#yellow .play-btn').find('img').attr('src','img/spa/replay_y.png');
  player1.seekTo(0).pauseVideo();
  isReplay = 1;
}

