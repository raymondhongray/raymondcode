$(document).ready(function() {
    $('body').on('click', '.show-more.by-event-page', function() {

        showPopup2($(this).parents('.info-window-row-content'));
    });

    $(".event-event-btn").click(function() {

        $("#popup1").css('display', 'block');
        // FB_login_share();
    });

    $(".event-map-btn").click(function() {

        window.location.href = 'map.html';
    });

    $("#submit-btn").click(function() {

        FB.login(function(response) {

            if (response.authResponse) {

                FB.api('/me', function(response) {

                    fb_name = response['name'];
                    fb_id = response['id'];

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
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            console.log("Status: " + textStatus);
                            console.log("Error: " + errorThrown);
                        },
                    });
                });
            } else {
                alert('登入失敗');
            }
        });
    });
});
