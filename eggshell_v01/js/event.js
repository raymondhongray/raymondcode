// 0615 james
function setProductTabInfoWindow() {

    $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos3" src="img/event/more1.png" />');
    $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos2" src="img/event/more1.png" />');
    $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos1" src="img/event/more1.png" />');

    tab2_contents = [
        ['img/event/p1.png'],
        ['img/event/p2.png'],
    ];

    $(".product-intro-group .tab-theme").click(function() {
        $('.product-intro-more').remove();

        var tab_index = $(this).attr('data-id');

        var tab_content = tab2_contents[tab_index];
        var img = tab_content[0];

        $('#product-info-window .info-window-row').find('img').attr('src', img);

        if (tab_index == 0) {
            $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos3" src="img/event/more1.png" />');
            $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos2" src="img/event/more1.png" />');
            $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos1" src="img/event/more1.png" />');
        } else {
            $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos2" src="img/event/more3.png" />');
            $('.product-intro-group').append('<img class="product-intro-more product-intro-more-pos1" src="img/event/more3.png" />');
        }

    });
}
// 0615 james end
function call_data_upload_api(fb_id, fb_name) {

    var title = $("#popup1 .recommend-title > input").val();
    var select_text = $("#popup1 .recommend-select > select").val();
    var content = $("#popup1 .recommend-textarea > textarea").val();

    var formData = new FormData();
    formData.append("fbid", fb_id);
    formData.append("fbname", fb_name);
    formData.append("title", title);
    formData.append("site", select_text);
    formData.append("content", content);
    formData.append('fileToUpload_01', $('#fileToUpload_01')[0].files[0]);
    formData.append('fileToUpload_02', $('#fileToUpload_02')[0].files[0]);
    formData.append('fileToUpload_03', $('#fileToUpload_03')[0].files[0]);

    $.ajax({
        type: 'POST',
        url: "../api/data_upload.php",
        type: "POST",
        data: formData,
        cache: false,
        dataType: "json",
        processData: false,
        contentType: false,
        success: function(res) {
            console.log(res);
            if (res.code == 0) {
                window.location.href = "event.html?popup=done";
            }
            if (res.code == 3) {
                alert('您推薦的景點是...');
            }
            if (res.code == 5) {
                alert('您推薦的原因是...');
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        },
    });
}

function getQueryStrByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function scrollDetect() {
    var scrollVal = $(this).scrollTop();
    if (scrollVal >= 0) {
        $('.btn-zone .btn').removeClass('active');
        $('.btn-zone .btn:nth-of-type(1)').addClass('active');
    }
    if (scrollVal >= $('.activity-group').offset().top - 700) {
        $('.event-event-btn,.event-map-btn').addClass('active');
    }
    if (scrollVal >= $('.activitie').offset().top - 1000) {
        $('.activitie').addClass('active');
    }
}


$(document).ready(function() {

    setProductTabInfoWindow();

    $(window).scroll(function() {
        scrollDetect();
    });

    $('body').on('click', '.show-more.by-event-page', function() {

        showPopup2($(this).parents('.info-window-row-content'));
    });

    $(".event-event-btn").click(function() {

        $("#popup1").css('display', 'block');
    });

    $(".event-map-btn").click(function() {

        // window.location.href = 'event.html?popup=1';
        window.location.href = 'map.html';
    });

    $("#submit-btn").click(function() {

        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {

                FB.api('/me', function(res) {
                    console.log(res);

                    fb_id = res['id'];
                    fb_name = res['name'];

                    call_data_upload_api(fb_id, fb_name);
                });
            } else {

                FB.login(function(response) {

                    if (response.authResponse) {

                        FB.api('/me', function(response) {

                            fb_name = response['name'];
                            fb_id = response['id'];

                            call_data_upload_api(fb_id, fb_name);
                        });
                    } else {
                        alert('登入失敗');
                    }
                });
            }
        });
    });

    // 0616 james 
    var recommendOffset = $('.activity-group').offset().top - 500;
    $('#event-index-img,.activitie').click(function() {
        $('html,body').animate({
            scrollTop: recommendOffset
        }, 500);
    });
    // 0616 james end

    if (getQueryStrByName('move_to') != null && getQueryStrByName('move_to') == 'event_equipment') {
        var equipmentOffset = $('#event-equipment').offset().top - 250;
        $('html,body').animate({
            scrollTop: equipmentOffset
        }, 500);
    }

    if (getQueryStrByName('move_to') != null && getQueryStrByName('move_to') == 'event_rule') {
        var event_ruleOffset = $('.event-rule').offset().top;
        $('html,body').animate({
            scrollTop: event_ruleOffset
        }, 500);
    }

    if (getQueryStrByName('popup') != null && getQueryStrByName('popup') == '1') {
        $("#popup1").css('display', 'block');
    }

    if (getQueryStrByName('popup') != null && getQueryStrByName('popup') == 'done') {
        $('.popup-done').css('display', 'block');
    }
});
