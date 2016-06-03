var navOpen = 0;

function mymedia(){
  if (!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ){
    document.location.href="../index.html";
  }

}
mymedia();


$(document).ready(function(){
//   $('#lineup').click(function(e){
//     e.preventDefault();
//     alert('coming soon');
//   });

	$('#show').click(function(){

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
      name: 'PIPISPA中心亞洲唯一全新開幕',
      method: 'feed',
      link: window.location.hostname,
      description: '4大精選療程，為屁屁來一場最極致的SPA體驗，本SPA中心採用業界頂級的舒潔乾+濕衛生紙。',
      // caption: '本SPA中心採用業界頂級的舒潔乾+濕衛生紙',
      // picture: 'https://its.ptt.com.tw/james/pipispa/img/logo.png'
         picture: window.location.hostname+"/img/logo.png"
    }, function(response){});
    console.log('share');
});


});