window.onscroll = function() { scroll_log() };

var is_event_taiwan = true;
var is_tab_info_window = true;
var is_activity_group = true;
var is_event_equipment = true;
var is_product_info_window = true;
var is_event_rule = true;

function scroll_log() {

    if (document.body.scrollTop >= $('.event-taiwan').offset().top) {
        if (is_event_taiwan) {
            ga('send', 'event', '活動頁', 'Click', '滑到 event-taiwan');
            is_event_taiwan = false;
        }
    }
    if (document.body.scrollTop >= $('#tab-info-window').offset().top) {
        if (is_tab_info_window) {
            ga('send', 'event', '活動頁', 'Click', '滑到 tab-info-window');
            is_tab_info_window = false;
        }
    }
    if (document.body.scrollTop >= $('.activity-group').offset().top) {
        if (is_activity_group) {
            ga('send', 'event', '活動頁', 'Click', '滑到 activity-group');
            is_activity_group = false;
        }
    }
    if (document.body.scrollTop >= $('.event-equipment').offset().top) {
        if (is_event_equipment) {
            ga('send', 'event', '活動頁', 'Click', '滑到 event-equipment');
            is_event_equipment = false;
        }
    }
    if (document.body.scrollTop >= $('#product-info-window').offset().top) {
        if (is_product_info_window) {
            ga('send', 'event', '活動頁', 'Click', '滑到 product-info-window');
            is_product_info_window = false;
        }
    }
    if (document.body.scrollTop >= $('.event-rule').offset().top) {
        if (is_event_rule) {
            ga('send', 'event', '活動頁', 'Click', '滑到 event-rule');
            is_event_rule = false;
        }
    }
}
