var showAll_RankInfoWindow = true;
var record_nextShowIndex = 0;
showAll_RankInfoWindow = true;

recommend_sites = [
    ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
    ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],

];

$(document).ready(function() {
    addRankInfoWindow(recommend_sites, record_nextShowIndex, showAll_RankInfoWindow);

    $("#rank-show-green").click(function() {

        addRankInfoWindowByTheme(recommend_sites_by_theme, _nextShowIndex, false);
    });

    var record_count = recommend_sites.length;

    $(".say-hi-count").text(record_count);

    // $(document).on(
    //     'fbload', //  <---- HERE'S OUR CUSTOM EVENT BEING LISTENED FOR
    //     function() {
    //         alert('in');
    //         //some code that requires the FB object
    //         FB.getLoginStatus(function(response) {
    //             if (response.status === 'connected') {

    //                 FB.api('/me', function(res) {

    //                     var fb_name = res['name'];
    //                     $(".say-hi-guy").text(fb_name);
    //                 });
    //             } else {

    //                 FB.login(function(response) {

    //                     if (response.authResponse) {

    //                         FB.api('/me', function(response) {

    //                             var fb_name = response['name'];
    //                             $(".say-hi-guy").text(fb_name);
    //                         });
    //                     } else {
    //                         alert('登入失敗');
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // );

    


});
