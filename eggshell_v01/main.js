if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // location.href = window.location.hostname+'/mobile/index.html';
  document.location.href="/index.html";
  return;
}
else {
  document.location.href="../index.html";
  return;
}

$(window).load(function(){
    setTimeout(function(){
        $('#loading').fadeOut();
       console.log('loading');
    },0);
    
});

// $('.fb-btn').click(function(){
//     FB.ui({
//       name: 'PIPISPA中心亞洲唯一全新開幕',
//       method: 'feed',
//       link: 'https://its.ptt.com.tw/james/pipispa/index.html',
//       description: '4大精選療程，為屁屁來一場最極致的SPA體驗，本SPA中心採用業界頂級的舒潔乾+濕衛生紙。',
//       // caption: '本SPA中心採用業界頂級的舒潔乾+濕衛生紙',
//       // picture: 'https://its.ptt.com.tw/james/pipispa/img/logo.png'
//          picture: window.location.hostname+"/img/logo.png"
//     }, function(response){});
//     console.log('share');
// });

