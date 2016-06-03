$(document).ready(function(){


    $('#text-1,#btn-btn-1').mouseover(function(){
        $('#tissue img:nth-of-type(1)').css('opacity',1);
        $('#tissue img:nth-of-type(2)').css('opacity',0);
    });
    $('#text-2,#btn-btn-2').mouseover(function(){
        $('#tissue img:nth-of-type(2)').css('opacity',1);
        $('#tissue img:nth-of-type(1)').css('opacity',0);
    });




});



