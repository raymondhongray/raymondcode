function FB_login() {

    FB.login(function(response) {

        if (response.authResponse) {

            console.log(response.authResponse);
            FB.api('/me', function(response) {
                console.log(response);
                // $('.to-share').trigger('click');
            });
        } else {
            alert('登入失敗');
        }
    });
}

function share() { //FB APP 發佈到塗鴉牆
    publish = {
        name: 'facebook api test',
        method: 'feed',
        link: window.location.hostname,
        description: '測試yoyo',
        // caption: '本SPA中心採用業界頂級的舒潔乾+濕衛生紙',
        picture: window.location.hostname + "/img/fb-share.jpg"
    };

    FB.ui(publish, function(response) {
        if (response && !response.error_message) {
            // $.post('api/fb_share.php', {fbid:fb_id, fbname:fb_cne}, function(data) {
            // console.log(data);},'json');
            alert('分享成功')
        } else {
            // alert('Oops，沒有分享成功要顯示的訊息！');
        }
    });
}


$(document).ready(function() {

    $('#nav-btn').click(function() {
        if ($('#nav-btn-line').hasClass('menu-active')) {
            $('header').removeClass('active');
            $('footer').removeClass('active');
            $('.nav-menu').removeClass('active');
            $('#nav-btn-line').removeClass('menu-active');
            $('#wrap').removeClass('active');
        } else {
            $('header').addClass('active');
            $('footer').addClass('active');
            $('.nav-menu').addClass('active');
            $('.nav-btn-line').addClass('menu-active');
            $('#wrap').addClass('active');
        }
    });

    $('#show').click(function() {

        var whatBrowser = navigator.userAgent;
        if (whatBrowser.match('Line/')) {
            if (whatBrowser.match('iPhone')) {
                alert('請使用Safari瀏覽器分享網站'); // FB無法分享  
            } else {
                alert('請使用Safari瀏覽器分享網站'); // FB API無法分享  
            }
            return;
        }

        if (whatBrowser.match('CriOS')) {
            if (whatBrowser.match('iPhone')) {
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
            picture: window.location.hostname + "/img/logo.png"
        }, function(response) {});
        console.log('share');
    });


});
