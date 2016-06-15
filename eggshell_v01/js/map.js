// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// 這裡一開始要全部load進來
var fb_name = '';
var fb_id = '';
var recommend_sites = [];
var nextShowIndex = 0;
var showAll_RankInfoWindow = false;
// var default_center = [25.0677678, 121.5716523];

// function getQueryStrByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// function initAutocomplete() {
//     var site = getQueryStrByName('site');

//     if (site == 'northern') {
//         default_center = [25.0677678, 121.5716523];
//     } else {
//         if (site == 'central') {
//             default_center = [24.0520737,120.6042791];
//         } else {
//             if (site == 'southern') {
//                 // default_center = [25.0677678, 121.5716523];
//             }
//         }
//     }

//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {
//             lat: default_center[0],
//             lng: default_center[1]
//         },
//         zoom: 16,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     });


//     // Create the search box and link it to the UI element.
//     var input = document.getElementById('pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener('bounds_changed', function() {
//         searchBox.setBounds(map.getBounds());
//     });

//     var markers = [];
//     // [START region_getplaces]
//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener('places_changed', function() {

//         var places = searchBox.getPlaces();
//         if (places.length == 0) {
//             return;
//         }

//         // Clear out the old markers.
//         markers.forEach(function(marker) {
//             marker.setMap(null);
//         });
//         markers = [];

//         // For each place, get the icon, name and location.
//         var bounds = new google.maps.LatLngBounds();

//         places.forEach(function(place) {
//             var icon = {
//                 url: place.icon,
//                 size: new google.maps.Size(71, 71),
//                 origin: new google.maps.Point(0, 0),
//                 anchor: new google.maps.Point(17, 34),
//                 scaledSize: new google.maps.Size(25, 25)
//             };

//             // Create a marker for each place.
//             // markers.push(new google.maps.Marker({
//             //     map: map,
//             //     icon: icon,
//             //     title: place.name,
//             //     position: place.geometry.location
//             // }));

//             if (place.geometry.viewport) {
//                 // Only geocodes have viewport.
//                 bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);
//     });

//     // 這裡一開始要全部load進來
//     // 以下是google map 使用的基本參數，可以擴充
//     // Ajax callback 回來再執行下面兩行
//     // var recommend_sites = [
//     //     ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300'],
//     //     ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200'],
//     // ];

//     recommend_sites = [
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],

//     ];

//     setRecommendMarkers(map, recommend_sites);

//     addRankInfoWindow(recommend_sites, 0, showAll_RankInfoWindow);
//     // [END region_getplaces]
// }

function addRankInfoWindow(recommend_sites, start, show_all) {

    var offset = 5;
    var end = recommend_sites.length;

    if (!show_all) {
        if ((recommend_sites.length - start) < 5) {
            offset = recommend_sites.length - start;
        }
        end = start + offset;
    }

    for (var i = start; i < end; i++) {

        var recommend_site = recommend_sites[i];

        var title = recommend_site[0];
        var scores = recommend_site[4];
        var img = recommend_site[5];
        var addr = recommend_site[6];
        var description_content = recommend_site[7];


        $('#rank-info-window .info-window-row[data-id=clone_me]').clone().appendTo('#rank-info-window .info-window-wrap').attr('data-id', i);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').css('display', 'block');
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .map-content-title').text(title);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.avg-score').text(scores);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.recommend-img > img').attr('src', img);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .addr-value').text(addr);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .map-content-description').text(description_content);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.index-marker > p').text(i + 1);

        setStarMarkers($('#rank-info-window .info-window-row[data-id=' + i + ']'), '.sm-star', scores);
    };
    nextShowIndex = i;

    if (recommend_sites.length <= offset || nextShowIndex >= recommend_sites.length) {
        $("#rank-show-btn").css('display', 'none');
    }
}

function setTabInfoWindow() {

    tab_contents = [
        ['#5fc2c7', 'title0', 'slogan0', 'addr0', 'content0', 'https://unsplash.it/200/200'],
        ['#669900', 'title1', 'slogan1', 'addr1', 'content1', 'https://unsplash.it/200/200'],
        ['#f8b600', 'title2', 'slogan2', 'addr2', 'content2', 'https://unsplash.it/200/200'],
        ['#acbb22', 'title3', 'slogan3', 'add3r', 'content3', 'https://unsplash.it/200/200'],
    ];

    $(".tab-theme").click(function() {
        var tab_index = $(this).attr('data-id');

        var tab_content = tab_contents[tab_index];
        var background_color = tab_content[0];
        var title = tab_content[1];
        var slogan = tab_content[2];
        var addr = tab_content[3];
        var description_content = tab_content[4];
        var img = tab_content[5];

        $('#tab-info-window').css('background-color', background_color);

        $('#tab-info-window .info-window-row').find('.info-window-row-content > .map-content-title').text(title);
        $('#tab-info-window .info-window-row').find('.info-window-row-content > .map-content-slogan').text(slogan);
        $('#tab-info-window .info-window-row').find('.recommend-img > img').attr('src', img);
        $('#tab-info-window .info-window-row').find('.info-window-row-content > .addr-value').text(addr);
        $('#tab-info-window .info-window-row').find('.info-window-row-content > .map-content-description').text(description_content);

    });
}

// function setRecommendMarkers(map, recommend_sites) {

//     var image = {
//         url: 'img/map/marker_icon.png',
//         // This marker is 20 pixels wide by 32 pixels high.
//         size: new google.maps.Size(75, 95),
//         // The origin for this image is (0, 0).
//         origin: new google.maps.Point(0, 0),
//         // The anchor for this image is the base of the flagpole at (0, 32).
//         anchor: new google.maps.Point(0, 32)
//     };
//     for (var i = 0; i < recommend_sites.length; i++) {
//         var recommend_site = recommend_sites[i];
//         var marker01 = new google.maps.Marker({
//             position: {
//                 lat: recommend_site[1],
//                 lng: recommend_site[2]
//             },
//             map: map,
//             icon: image,
//             // shape: shape,
//             title: recommend_site[0],
//             zIndex: recommend_site[3],
//             // 自己定義 key 
//             lat: recommend_site[1],
//             lng: recommend_site[2],
//             avg_scores: recommend_site[4],
//             img: recommend_site[5],
//             description_content: recommend_site[7]
//         });


//         marker01.addListener('click', function() {
//             // console.log(this.lat);
//             // var infowindow = new google.maps.InfoWindow({
//             //     content: map_template
//             // });
//             // infowindow.open(map, this);
//             // $("#map-template, #map-close-icon").fadeIn(800, 'swing');

//             $('#map-info-window').find('.info-window-row-content > .map-content-title').text(this.title);
//             $('#map-info-window').find('.avg-score').text(this.avg_scores);
//             $('#map-info-window').find('.recommend-img > img').attr('src', this.img);
//             $('#map-info-window').find('.info-window-row-content > .map-content-description').text(this.description_content);

//             setStarMarkers($("#map-info-window"), '.sm-star', this.avg_scores);

//             var geocoder = new google.maps.Geocoder();
//             // google.maps.LatLng 物件
//             // var coord = new google.maps.LatLng(25.0439892, 121.5212213);
//             var coord = new google.maps.LatLng(this.lat, this.lng);
//             // 傳入 latLng 資訊至 geocoder.geocode

//             geocoder.geocode({
//                 'latLng': coord
//             }, function(results, status) {
//                 if (status === google.maps.GeocoderStatus.OK) {
//                     // 如果有資料就會回傳
//                     if (results) {
//                         console.log(results[0]);
//                         // 假如後端api 有回傳addr，那這段就可以拉出來
//                         $('#map-info-window').find('.info-window-row-content > .addr-value').text(results[0]['formatted_address']);
//                     }

//                     $("#map-info-window, #map-close-icon").fadeIn(800, 'swing');
//                 }
//                 // 經緯度資訊錯誤
//                 else {
//                     alert("Reverse Geocoding failed because: " + status);
//                 }
//             });

//         });
//     }
// }

function setStarMarkers(object, target_class, scores) {
    var star_group_count = object.find(target_class).parent().children().length;

    // 初始化成空的星號
    for (var i = 1; i <= star_group_count; i++) {
        if (object.find(target_class + ':nth-child(' + i + ')').hasClass('fa-star')) {
            object.find(target_class + ':nth-child(' + i + ')').removeClass('fa-star');
            object.find(target_class + ':nth-child(' + i + ')').addClass('fa-star-o');
        }
    };

    if (scores > 0) {
        for (var i = 1; i <= scores; i++) {
            object.find(target_class + ':nth-child(' + i + ')').removeClass('fa-star-o');
            object.find(target_class + ':nth-child(' + i + ')').addClass('fa-star');
        }
    }
}

function showPopup(object) {

    var title = object.find('.map-content-title').text();
    $(".display-recommend-title > p.recommend-title-text").text(title);

    var select_text = object.find('.addr-value').text();
    $(".display-recommend-select > p.recommend-select-text").text(select_text);

    var content = object.find('.map-content-description').text();
    $(".display-recommend-textarea > p.recommend-textarea-text").text(content);

    $('.popup').css('display', 'block');
}

function showPopup2(object) {

    var title = object.find('.map-content-title').text();
    $("#popup2 .display-recommend-title > p.recommend-title-text").text(title);

    var select_text = object.find('.addr-value').text();
    $("#popup2 .display-recommend-select > p.recommend-select-text").text(select_text);

    var content = object.find('.map-content-description').text();
    $("#popup2 .display-recommend-textarea > p.recommend-textarea-text").text(content);

    $('.popup').css('display', 'none');
    $('#popup2.popup').css('display', 'block');
}

// var map_template = $("#map-template").prop('outerHTML');

$(document).ready(function() {

    setTabInfoWindow();

    $("#map-info-window .lg-star").click(function() {

        console.log('you click star #' + $(this).attr('data-id'));

        var scores = $(this).attr('data-id');
        setStarMarkers($("#map-info-window"), '.lg-star', scores);
    });

    $("#rank-show-btn").click(function() {

        addRankInfoWindow(recommend_sites, nextShowIndex, showAll_RankInfoWindow);
    });

    $('body').on('click', '.show-more', function() {

        showPopup($(this).parents('.info-window-row-content'));
    });
});
