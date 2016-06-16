var default_center = [25.0677678, 121.5716523];

function getQueryStrByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function initAutocomplete() {
    var site = getQueryStrByName('site');

    if (site == 'northern') {
        default_center = [25.0677678, 121.5716523];
    } else {
        if (site == 'central') {
            default_center = [24.0520737, 120.6042791];
        } else {
            if (site == 'southern') {
                // default_center = [25.0677678, 121.5716523];
            }
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: default_center[0],
            lng: default_center[1]
        },
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // [START region_getplaces]
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {

        var places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();

        places.forEach(function(place) {
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            // markers.push(new google.maps.Marker({
            //     map: map,
            //     icon: icon,
            //     title: place.name,
            //     position: place.geometry.location
            // }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    // 這裡一開始要全部load進來
    // 以下是google map 使用的基本參數，可以擴充
    // Ajax callback 回來再執行下面兩行
    // var recommend_sites = [
    //     ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300'],
    //     ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200'],
    // ];

    $.ajax({
        type: 'POST',
        url: '../api/data_list.php',
        data: {
            page: 1,
            num: 10000,
            hidden: 1
        },
        dataType: "json",
        success: function(res) {
            console.log(res);
            data_lists = res.list;

            console.log(res.page, 'page_lists');

            console.log(data_lists, 'data_lists');

            for (var i = 0; i < data_lists.length; i++) {
                var list = data_lists[i];
                var gps_x = parseFloat(list.gps_x);
                var gps_y = parseFloat(list.gps_y);
                var site = [list.title, gps_x, gps_y, 1, list.avg, list.img_1, list.address, list.content, list.did, list.site, list.totel, list.time, list.img_2, list.img_3]
                recommend_sites.push(site);           
            }

            setRecommendMarkers(map, recommend_sites);

            addRankInfoWindow(recommend_sites, 0, showAll_RankInfoWindow);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        },
    });



    // recommend_sites = [
    //     ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳', 1],
    // ];

    // setRecommendMarkers(map, recommend_sites);

    // addRankInfoWindow(recommend_sites, 0, showAll_RankInfoWindow);
    // [END region_getplaces]
}

function setRecommendMarkers(map, recommend_sites) {

    var image = {
        url: 'img/map/marker_icon.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(75, 95),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    for (var i = 0; i < recommend_sites.length; i++) {
        var recommend_site = recommend_sites[i];
        var marker01 = new google.maps.Marker({
            position: {
                lat: recommend_site[1],
                lng: recommend_site[2]
            },
            map: map,
            icon: image,
            // shape: shape,
            title: recommend_site[0],
            zIndex: recommend_site[3],
            // 自己定義 key 
            lat: recommend_site[1],
            lng: recommend_site[2],
            avg_scores: recommend_site[4],
            img: recommend_site[5],
            description_content: recommend_site[7],
            did: recommend_site[8]
        });


        marker01.addListener('click', function() {
            // console.log(this.lat);
            // var infowindow = new google.maps.InfoWindow({
            //     content: map_template
            // });
            // infowindow.open(map, this);
            // $("#map-template, #map-close-icon").fadeIn(800, 'swing');
            $("#map-info-window").attr('data-id', this.did);
            $('#map-info-window').find('.info-window-row-content > .map-content-title').text(this.title);
            $('#map-info-window').find('.avg-score').text(this.avg_scores);
            $('#map-info-window').find('.recommend-img > img').attr('src', this.img);
            $('#map-info-window').find('.info-window-row-content > .map-content-description').text(this.description_content);

            setStarMarkers($("#map-info-window"), '.sm-star', this.avg_scores);

            var geocoder = new google.maps.Geocoder();
            // google.maps.LatLng 物件
            // var coord = new google.maps.LatLng(25.0439892, 121.5212213);
            var coord = new google.maps.LatLng(this.lat, this.lng);
            // 傳入 latLng 資訊至 geocoder.geocode

            geocoder.geocode({
                'latLng': coord
            }, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    // 如果有資料就會回傳
                    if (results) {
                        console.log(results[0]);
                        // 假如後端api 有回傳addr，那這段就可以拉出來
                        $('#map-info-window').find('.info-window-row-content > .addr-value').text(results[0]['formatted_address']);
                    }

                    $("#map-info-window, #map-close-icon").fadeIn(800, 'swing');
                }
                // 經緯度資訊錯誤
                else {
                    alert("Reverse Geocoding failed because: " + status);
                }
            });

        });
    }
}
$(document).ready(function() {

    $("#map-submit").click(function() {

        $("#pac-input").val($("#map-search").val());
        var input = document.getElementById('pac-input');

        google.maps.event.trigger(input, 'focus')
        google.maps.event.trigger(input, 'keydown', {
            keyCode: 13
        });

    });

    $("#map-close-icon").click(function() {

        $("#map-info-window, .map-close-icon").fadeOut(800, 'swing', function() {
            setStarMarkers($("#map-info-window"), '.lg-star', 0);
        });
    });

    // $("#map-info-window .lg-star").click(function() {

    //     console.log('you click star #' + $(this).attr('data-id'));

    //     var scores = $(this).attr('data-id');
    //     setStarMarkers($("#map-info-window"), '.lg-star', scores);
    // });

    // $("#rank-show-btn").click(function() {

    //     addRankInfoWindow(recommend_sites, nextShowIndex, showAll_RankInfoWindow);
    // });

    // $('body').on('click', '.show-more', function() {

    //     showPopup($(this).parents('.info-window-row-content'));
    // });
});
