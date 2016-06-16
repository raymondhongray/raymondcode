$(document).ready(function() {


    $(".flexslider").flexslider({});

    init();
    
    $('#index-search > button').click(function() {
        window.location.href = 'map.html?site=' + $('#index-search > select').val();
    });

    $('#index-search > button').click(function() {
        window.location.href = 'map.html?site=' + $('#index-search > select').val();
    });

});

function init(){
    $('.flexslider')
    .addClass('active')
    .delay(500)
    .queue(function(){
        $('#index-search').addClass('active');
        $(this).dequeue();
    })
    .delay(600)
    .queue(function(){
        $('.index-main-theme-group').addClass('active');
        $(this).dequeue();
    });
}