
function mymedia(){
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.location.href="mobile/index.html";
  }

}
mymedia();

// $(window).load(function(){
    setTimeout(function(){
        $('#loading').fadeOut();
       console.log('loading');
    },100);
// });

// $('#nav-bar li:nth-of-type(3)').click(function(e){
//   e.preventDefault();
//   alert('coming soon')
// });

$('.fb-btn').click(function(){
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

