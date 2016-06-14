function nl2br(str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

$(document).ready(function() {
    $('#fileToUpload_01').change(function() {

        $('<div class="upload-img-theme"><img id="img_fileToUpload_01" class="theme-middle img_fileToUpload" src="" /><div id="remove-icon_01" class="remove-icon"></div></div>').insertBefore("#upload_btn");

        var input = document.getElementById("fileToUpload_01");
        if (typeof input.files[0] != 'undefined') {
            var fReader = new FileReader();
            fReader.readAsDataURL(input.files[0]);
            fReader.onloadend = function(event) {
                var img = document.getElementById("img_fileToUpload_01");
                img.src = event.target.result;

                if ($('#img_box').children().length == 4) {
                    $("#upload_btn").css('display', 'none');
                }

                $("#remove-icon_01").click(function(event) {
                    event.preventDefault();
                    $(this).parent().remove();
                    if ($('#img_box').children().length < 4 && $("#upload_btn").css('display') == 'none') {
                        $("#upload_btn").css('display', 'inline-block');
                    }
                    document.getElementById("fileToUpload_01").value = '';
                });
            }
        }
    });
    $('#fileToUpload_02').change(function() {

        $('<div class="upload-img-theme"><img id="img_fileToUpload_02" class="theme-middle img_fileToUpload" src="" /><div id="remove-icon_02" class="remove-icon"></div></div>').insertBefore("#upload_btn");

        var input = document.getElementById("fileToUpload_02");
        if (typeof input.files[0] != 'undefined') {
            var fReader = new FileReader();
            fReader.readAsDataURL(input.files[0]);
            fReader.onloadend = function(event) {
                var img = document.getElementById("img_fileToUpload_02");
                img.src = event.target.result;

                if ($('#img_box').children().length == 4) {
                    $("#upload_btn").css('display', 'none');
                }

                $("#remove-icon_02").click(function(event) {
                    event.preventDefault();
                    $(this).parent().remove();
                    if ($('#img_box').children().length < 4 && $("#upload_btn").css('display') == 'none') {
                        $("#upload_btn").css('display', 'inline-block');
                    }
                    document.getElementById("fileToUpload_02").value = '';
                });
            }
        }
    });
    $('#fileToUpload_03').change(function() {

        $('<div class="upload-img-theme"><img id="img_fileToUpload_03" class="theme-middle img_fileToUpload" src="" /><div id="remove-icon_03" class="remove-icon"></div></div>').insertBefore("#upload_btn");

        var input = document.getElementById("fileToUpload_03");
        if (typeof input.files[0] != 'undefined') {
            var fReader = new FileReader();
            fReader.readAsDataURL(input.files[0]);
            fReader.onloadend = function(event) {
                var img = document.getElementById("img_fileToUpload_03");
                img.src = event.target.result;

                if ($('#img_box').children().length == 4) {
                    $("#upload_btn").css('display', 'none');
                }

                $("#remove-icon_03").click(function(event) {
                    event.preventDefault();
                    $(this).parent().remove();
                    if ($('#img_box').children().length < 4 && $("#upload_btn").css('display') == 'none') {
                        $("#upload_btn").css('display', 'inline-block');
                    }
                    document.getElementById("fileToUpload_03").value = '';
                });
            }
        }
    });
    $("#upload_btn").click(function(event) {
        event.preventDefault();

        if ($('#img_fileToUpload_01').length == 0) {

            $('#fileToUpload_01').trigger('click');
        } else {
            if ($('#img_fileToUpload_02').length == 0) {

                $('#fileToUpload_02').trigger('click');
            } else {
                if ($('#img_fileToUpload_03').length == 0) {

                    $('#fileToUpload_03').trigger('click');
                }
            }
        }
    });

    $("#remove-popup").click(function(event) {
        event.preventDefault();

        $(".popup").css('display', 'none');
    });

    $("#remove-popup2").click(function(event) {
        event.preventDefault();
    
        $(".popup").css('display', 'none');
    });

    $("#preview-btn").click(function(event) {
        event.preventDefault();
        //用click 方式來觸發臉書api
        // FB_login();
        var title = $(".recommend-title > input").val();
        $("#popup1 .display-recommend-title > p.recommend-title-text").text(title);

        var select_text = $(".recommend-select > select").val();
        $("#popup1 .display-recommend-select > p.recommend-select-text").text(select_text);

        var content = $(".recommend-textarea > textarea").val();
        $("#popup1 .display-recommend-textarea > .recommend-textarea-text").html(nl2br(content));

        $("#popup1 .input-area").css('display', 'none');
        $("#popup1 .display-area").css('display', 'block');
        $("#upload_btn").css('display', 'none');
        $("#popup1 .remove-icon").css('display', 'none');
        $("#preview-btn").css('display', 'none');
        $("#edit-submit-btn-group").css('display', 'block');
    });

    $("#edit-btn").click(function(event) {
        event.preventDefault();

        $("#popup1 .input-area").css('display', 'block');
        $("#popup1 .display-area").css('display', 'none');
        $("#popup1 .remove-icon").css('display', 'block');
        $("#preview-btn").css('display', 'block');
        $("#edit-submit-btn-group").css('display', 'none');

        if ($('#img_box').children().length < 4 && $("#upload_btn").css('display') == 'none') {
            $("#upload_btn").css('display', 'inline-block');
        }
    });
});
