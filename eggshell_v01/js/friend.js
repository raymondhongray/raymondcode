var recommend_sites_by_theme = [];
var _nextShowIndex = 0;
var recommend_sites_names = [];
var recommend_sites_by_season = [];
var recommend_sites_by_nature = [];
var recommend_sites_by_city = [];
var recommend_sites_by_fam = [];

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

        $('#theme-info-window .info-window-row[data-id=clone_me]').clone().appendTo('#theme-info-window .info-window-wrap').attr('data-id', i).addClass('replica');
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.theme_bg-marker > p').text(title);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .map-content-description').text(description_content);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.recommend-img > img').attr('src', img);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.travel-logo').attr('src', travel_logo);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').css('display', 'block');
    }

    _nextShowIndex = i;

    if (recommend_sites.length <= offset || _nextShowIndex >= recommend_sites.length) {
        $("#rank-show-green").css('display', 'none');
    }
}

$(document).ready(function() {
    recommend_sites_by_season = [
        ['seasontitle0', 'content0', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['seasontitle1', 'content1', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['seasontitle2', 'content2', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['seasontitle3', 'content3', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
    ];

    recommend_sites_by_nature = [
        ['naturetitle0', 'content0', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['naturetitle1', 'content1', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['naturetitle2', 'content2', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['naturetitle3', 'content3', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
    ];

    recommend_sites_by_city = [
        ['citytitle0', 'content0', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['citytitle1', 'content1', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['citytitle2', 'content2', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['citytitle3', 'content3', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
    ];

    recommend_sites_by_fam = [
        ['famtitle0', 'content0', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['famtitle1', 'content1', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['famtitle2', 'content2', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['famtitle3', 'content3', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['famtitle0', 'content0', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['famtitle1', 'content1', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['famtitle2', 'content2', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['famtitle3', 'content3', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
    ];

    recommend_sites_names = [recommend_sites_by_season, recommend_sites_by_nature, recommend_sites_by_city, recommend_sites_by_fam];

    recommend_sites_by_theme = recommend_sites_names[0];

    addRankInfoWindowByTheme(recommend_sites_by_theme, _nextShowIndex, false);

    $("#rank-show-green").click(function() {

        addRankInfoWindowByTheme(recommend_sites_by_theme, _nextShowIndex, false);
    });

    $(".theme-type > p").click(function() {
    
        $(".theme-type").removeClass('current-select');

        $(this).parent().addClass('current-select');

        var select_theme_index = $(this).parent().attr('data-id');

        recommend_sites_by_theme = recommend_sites_names[select_theme_index];

        _nextShowIndex = 0;

        $(".replica").remove();

        addRankInfoWindowByTheme(recommend_sites_by_theme, _nextShowIndex, false);

        $("#rank-show-green").css('display', 'block');
    });
});
