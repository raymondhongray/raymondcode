window.onscroll = function() { scroll_log() };

var is_google_map = true;
var is_tab_info_window = true;
var is_rank_info_window = true;

function scroll_log() {

    if (document.body.scrollTop >= $('.google-map-bg').offset().top) {
        if (is_google_map) {
            ga('send', 'event', '地圖頁', 'Click', '滑到 google-map-bg');
            is_google_map = false;
        }
    }
    if (document.body.scrollTop >= $('#tab-info-window').offset().top) {
        if (is_tab_info_window) {
            ga('send', 'event', '地圖頁', 'Click', '滑到 tab-info-window');
            is_tab_info_window = false;
        }
    }
    if (document.body.scrollTop >= $('#rank-info-window').offset().top) {
        if (is_rank_info_window) {
            ga('send', 'event', '地圖頁', 'Click', '滑到 rank-info-window');
            is_rank_info_window = false;
        }
    }
}
