// 0615 james
function setProductTabInfoWindow() {

    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=196" target="_blank"><img class="product-intro-more product-intro-more-pos3" src="img/event/more1.png" />');
    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank"><img class="product-intro-more product-intro-more-pos2" src="img/event/more1.png" />');
    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank"><img class="product-intro-more product-intro-more-pos1" src="img/event/more1.png" />');

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
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=196" target="_blank"><img class="product-intro-more product-intro-more-pos3" src="img/event/more1.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank"><img class="product-intro-more product-intro-more-pos2" src="img/event/more1.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank"><img class="product-intro-more product-intro-more-pos1" src="img/event/more1.png" />');
        } else {
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=232" target="_blank"><img class="product-intro-more product-intro-more-pos2" src="img/event/more3.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=232" target="_blank"><img class="product-intro-more product-intro-more-pos1" src="img/event/more3.png" />');
        }

    });
}
// 0615 james end
function call_data_upload_api(fb_id, fb_name) {

    if (getCookie('call_data_upload')) {

        var data_upload_obj = JSON.parse(getCookie('call_data_upload'));

        console.log(data_upload_obj);

        var formData = new FormData();
        formData.append("fbid", fb_id);
        formData.append("fbname", fb_name);
        formData.append("title", data_upload_obj.title);
        formData.append("site", data_upload_obj.select_text);
        formData.append("content", data_upload_obj.content);
        formData.append('fileToUpload_01', data_upload_obj.fileToUpload_01);
        formData.append('fileToUpload_02', data_upload_obj.fileToUpload_02);
        formData.append('fileToUpload_03', data_upload_obj.fileToUpload_03);

        deleteCookie('call_data_upload');
    } else {
        console.log(data_upload_obj);

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
    }



    $('.loading-effect').css('display', 'block');

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
            $('.loading-effect').css('display', 'none');
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
            $('.loading-effect').css('display', 'none');
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        },
    });
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

function is_ios_device() {
    var standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        return true;
    } else {
        return false;
    };
}

// window.fbAsyncInit = function() {
//     FB.init({
//         appId: '1033597740066827',
//         xfbml: true,
//         version: 'v2.6'
//     });

//     FB.getLoginStatus(function(response) {
//         if (response.status !== 'connected') {
//             var appId = '1033597740066827';
//             var app_permissions = 'public_profile';
//             var permissionUrl = "https://m.facebook.com/dialog/oauth?client_id=" + appId + "&response_type=code&redirect_uri=" + window.location + "&scope=" + app_permissions;
//             window.location = permissionUrl;
//         } else {
//             console.log(response);
//         }
//     });
// };

$(document).ready(function() {

    setProductTabInfoWindow();

    if (getCookie('call_data_upload')) {

        setTimeout(function() {
            FB.api('/me', function(response) {

                var fb_name = response['name'];
                var fb_id = response['id'];

                call_data_upload_api(fb_id, fb_name);
            });
        }, 1500);

    }

    $(window).scroll(function() {
        scrollDetect();
    });

    $(document).on('click touchstart', '.show-more.by-event-page', function() {

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

        if (!$("#img_fileToUpload_01").attr('src')) {
            alert('請您推薦一張照片~')
        } else {
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    // alert('q1');
                    FB.api('/me', function(res) {
                        console.log(res);

                        fb_id = res['id'];
                        fb_name = res['name'];

                        call_data_upload_api(fb_id, fb_name);
                    });
                } else {
                    // alert('q2');
                    var title = $(".recommend-title > input").val();
                    var select_text = $(".recommend-select > select").val();
                    var content = $(".recommend-textarea > textarea").val();
                    var fileToUpload_01 = $('#fileToUpload_01')[0].files[0];
                    var fileToUpload_02 = $('#fileToUpload_02')[0].files[0];
                    var fileToUpload_03 = $('#fileToUpload_03')[0].files[0];

                    // 臉書登入
                    var cookie_call_data_upload = {
                        title: title,
                        select_text: select_text,
                        content: content,
                        fileToUpload_01: fileToUpload_01,
                        fileToUpload_02: fileToUpload_02,
                        fileToUpload_03: fileToUpload_03
                    }

                    setCookie('call_data_upload', JSON.stringify(cookie_call_data_upload), 180);
                    var appId = '1033597740066827';
                    var app_permissions = 'public_profile';
                    var permissionUrl = "https://m.facebook.com/dialog/oauth?client_id=" + appId + "&response_type=code&redirect_uri=" + window.location + "&scope=" + app_permissions;
                    window.location = permissionUrl;
                }
            });
        }
    });

    // 0616 james 
    var recommendOffset = $('.activity-group').offset().top - 500;
    $('.event_index_btn2, .activitie').click(function() {
        $('html,body').animate({
            scrollTop: recommendOffset
        }, 500);
    });
    // 0616 james end

    var event_taiwanOffset = $('.event-taiwan').offset().top - 100;
    $('.event_index_btn1').click(function() {
        $('html,body').animate({
            scrollTop: event_taiwanOffset
        }, 500);
    });

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

    if (getQueryStrByName('move_to') != null && getQueryStrByName('move_to') == 'deer_play') {

        var event_taiwanOffset = $('.event-taiwan').offset().top - 100;
        $('html,body').animate({
            scrollTop: event_taiwanOffset
        }, 500);
    }

    if (getQueryStrByName('popup') != null && getQueryStrByName('popup') == '1') {
        $("#popup1").css('display', 'block');
    }

    if (getQueryStrByName('popup') != null && getQueryStrByName('popup') == 'done') {
        $('.popup-done').css('display', 'block');
    }
});
