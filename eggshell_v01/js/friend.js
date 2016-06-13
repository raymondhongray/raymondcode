var recommend_sites = [];

function addRankInfoWindow(recommend_sites) {


    for (var i = 0; i < recommend_sites.length; i++) {

        var recommend_site = recommend_sites[i];

        var title = recommend_site[0];
        var description_content = recommend_site[1];
        var img = recommend_site[2];
        var travel_logo = recommend_site[3];

        $('#theme-info-window .info-window-row[data-id=clone_me]').clone().appendTo('#theme-info-window .info-window-wrap').attr('data-id', i);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.theme_bg-marker > p').text(title);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .map-content-description').text(description_content);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.recommend-img > img').attr('src', img);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').find('.travel-logo').attr('src', travel_logo);
        $('#theme-info-window .info-window-row[data-id=' + i + ']').css('display', 'block');
    };
}

$(document).ready(function() {
    recommend_sites = [
        ['title0', 'content0', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['title1', 'content1', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['title2', 'content2', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
        ['title3', 'content3', 'https://unsplash.it/200/200', 'https://unsplash.it/100/100'],
    ];

    addRankInfoWindow(recommend_sites);
});
