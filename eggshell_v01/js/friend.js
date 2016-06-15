var recommend_sites_by_theme = [];
var _nextShowIndex = 0;
var recommend_sites_by_cid = [];

var travel_store = ['img/friend/logo_01.jpg', 'img/friend/logo_02.jpg', 'img/friend/logo_03.jpg', 'img/friend/logo_04.jpg']

function addRankInfoWindowByTheme(recommend_sites, start, show_all) {

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
        var description_content = recommend_site[1];
        var img = recommend_site[2];
        var travel_logo = recommend_site[3];
        var url = recommend_site[4];

        $('#theme-info-window .info-window-row[data-id=clone_me]').clone().appendTo('#theme-info-window .info-window-wrap').attr('data-id', i).addClass('replica');
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.theme_bg-marker > p').text(title);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .map-content-description').html(description_content);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.recommend-img > img').attr('src', img);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.travel-logo').attr('src', travel_logo);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.attend-btn').parent('a').attr('href', url);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').css('display', 'block');
    }

    _nextShowIndex = i;

    if (recommend_sites.length <= offset || _nextShowIndex >= recommend_sites.length) {
        $("#rank-show-green").css('display', 'none');
    }
}

function get_travel_list_by_id(id) {

    $.ajax({
        type: 'POST',
        url: '../api/travel_list.php',
        data: {
            cid: id,
        },
        async: false,
        dataType: "json",
        success: function(res) {
            // console.log(res);
            recommend_sites_by_theme = [];
            data_lists = res;

            for (var i = 0; i < data_lists.length; i++) {
                var list = data_lists[i];
                var site = [list.title, list.content, list.img, travel_store[list.store - 1], list.url];
                recommend_sites_by_theme.push(site);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        },
    });
}

$(document).ready(function() {

    get_travel_list_by_id(1);

    recommend_sites_by_cid[0] = recommend_sites_by_theme;

    addRankInfoWindowByTheme(recommend_sites_by_theme, _nextShowIndex, false);

    $("#rank-show-green").click(function() {

        addRankInfoWindowByTheme(recommend_sites_by_theme, _nextShowIndex, false);
    });

    $(".theme-type > p").click(function() {

        $(".theme-type").removeClass('current-select');

        $(this).parent().addClass('current-select');

        var select_theme_index = $(this).parent().attr('data-id');

        if (typeof recommend_sites_by_cid[select_theme_index - 1] == 'undefined') {

            get_travel_list_by_id(select_theme_index);

            recommend_sites_by_cid[select_theme_index - 1] = recommend_sites_by_theme;

        } else {
            recommend_sites_by_theme = recommend_sites_by_cid[select_theme_index - 1];
        }

        _nextShowIndex = 0;

        $(".replica").remove();

        $("#rank-show-green").css('display', 'block');

        addRankInfoWindowByTheme(recommend_sites_by_theme, _nextShowIndex, false);
    });
});
