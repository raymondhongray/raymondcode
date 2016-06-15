// 0615 james
function setProductTabInfoWindow() {

    tab2_contents = [
        ['img/event/p1.png'],
        ['img/event/p2.png'],
    ];

    $(".product-intro-group .tab-theme").click(function() {
        var tab_index = $(this).attr('data-id');

        var tab_content = tab2_contents[tab_index];
        var img = tab_content[0];

        $('#product-info-window .info-window-row').find('img').attr('src', img);

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

$(document).ready(function() {

    setProductTabInfoWindow();

    $('body').on('click', '.show-more.by-event-page', function() {

        showPopup2($(this).parents('.info-window-row-content'));
    });

    $(".event-event-btn").click(function() {

        $("#popup1").css('display', 'block');
    });

    $(".event-map-btn").click(function() {

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
});
