var showAll_RankInfoWindow = true;
var record_nextShowIndex = 0;
showAll_RankInfoWindow = true;

$(document).ready(function() {

    // addRankInfoWindow(recommend_sites, record_nextShowIndex, showAll_RankInfoWindow);

    // var record_count = recommend_sites.length;

    // $(".say-hi-count").text(record_count);
});

function call_data_list_by_fbid(fb_id) {
	$.ajax({
        type: 'POST',
        url: '../api/data_list.php',
        data: {
            page: 1,
            num: 10000,
            fbid: fb_id,
            hidden: 0
        },
        dataType: "json",
        success: function(res) {
            console.log(res);
            data_lists = res.list;

            console.log(res.page, 'page_lists');

            console.log(data_lists, 'data_lists');

            var recommend_sites = [];

            for (var i = 0; i < data_lists.length; i++) {
                var list = data_lists[i];
                var gps_x = parseFloat(list.gps_x);
                var gps_y = parseFloat(list.gps_y);
                var site = [list.title, gps_x, gps_y, 1, list.avg, list.img_1, list.address, list.content, list.did, list.site, list.totel, list.time, list.img_2, list.img_3]
                recommend_sites.push(site);           
            }

            init_recommend_sites(recommend_sites)
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        },
    });
}

function init_recommend_sites(recommend_sites) {

	addRankInfoWindow(recommend_sites, record_nextShowIndex, showAll_RankInfoWindow);
    
    var record_count = recommend_sites.length;

    $(".say-hi-count").text(record_count);

    if (record_count == 0) {
    	$('#rank-info-window').css('display', 'none');
    }else {
    	$('#content').css('height', 'auto');
    }
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '1033598853400049',
        xfbml: true,
        version: 'v2.6'
    });

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {

            FB.api('/me', function(res) {

                var fb_name = res['name'];
                var fb_id = res['id'];

                $(".say-hi-guy").text(fb_name);

                call_data_list_by_fbid(fb_id);
            });
        } else {

            FB.login(function(response) {

                if (response.authResponse) {

                    FB.api('/me', function(response) {

                        var fb_name = response['name'];
                        var fb_id = res['id'];

                        $(".say-hi-guy").text(fb_name);

                        call_data_list_by_fbid(fb_id)
                    });
                } else {
                    alert('登入失敗');
                }
            });
        }
    });
};
