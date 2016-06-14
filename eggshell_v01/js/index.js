$(document).ready(function() {

    $(".flexslider").flexslider({});
    
    $('#index-search > button').click(function() {
        window.location.href = 'map.html?site=' + $('#index-search > select').val();
    });

    $('#index-search > button').click(function() {
        window.location.href = 'map.html?site=' + $('#index-search > select').val();
    });

    $('#expansion').click(function() {
        $('.sub-menu').css('display', 'block');
    });

});
