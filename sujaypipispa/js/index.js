var count;
var mouseMoved = 0;
var sCount = 0;
var isMouseLeave = 1;
var random = 0;
var temp;
var rdmArray = [];
var exit = 0;
var i = 1;
var faceArray =[$('#face-1'),$('#face-2'),$('#face-3'),$('#face-4')];

$(document).ready(function(){


    $('#face-1').mouseenter(function(){
        $('.change-color').css('background','#70d3d6');
    });
    $('#face-2').mouseenter(function(){
        $('.change-color').css('background','#37bc98');
    });
    $('#face-3').mouseenter(function(){
        $('.change-color').css('background','#ffd778');
    });
    $('#face-4').mouseenter(function(){
        $('.change-color').css('background','#fcabab');
    });


    $('.super-face').mouseenter(function(){
        isMouseLeave = 0;

        $('.face').find('.cover').removeClass('no-bg');
        $('.face').find('.name').removeClass('active');
        $('.face').find('.face-img').css('transform','translateY(0%)');
        $('.face').find('.name-2').removeClass('active');
        // to reset

        $(this).find('.cover').addClass('no-bg');
        $(this).find('.name').addClass('active');
        $(this).find('.name-2').addClass('active');
        $(this).find('.face-img').css('transform','translateY(-50%)');
    });
    $('.super-face').mouseleave(function(){
        isMouseLeave = 1;
        $(this).find('.cover').removeClass('no-bg');
        $(this).find('.name').removeClass('active');
        $(this).find('.name-2').removeClass('active');
        $(this).find('.face-img').css('transform','translateY(0)');
        $('.change-color').css('background','#70d3d6');
    });

    setTimeout(function(){
          if(isMouseLeave == 1){
            simulateTrigger($('#face-1'));
            rdmArray[0] = 0;
          }

   },1500);

     setInterval(function(){

            if(isMouseLeave == 1){

            temp = random;
            random = Math.floor(Math.random()*4);
            if(rdmArray.indexOf(random) != -1 || temp == random){
                random = Math.floor(Math.random()*4);
            }   
            rdmArray[i] = random;
            i++;
            
            if(rdmArray.length == 4){
              rdmArray = [];
              i = 0;
            }

            
            // 不連續重複 
            console.log('i2: '+i);
            console.log('rdmArray2: '+rdmArray);

            simulateTrigger(faceArray[random]);
        }
    },5500);



});


function simulateTrigger(face){
    $('.face').find('.cover').removeClass('no-bg');
    $('.face').find('.name').removeClass('active');
    $('.face').find('.face-img').css('transform','translateY(0%)');
    $('.face').find('.name-2').removeClass('active');
    $('.change-color').css('background','#70d3d6');

    face.find('.cover').addClass('no-bg');
    face.find('.name').addClass('active');
    face.find('.face-img').css('transform','translateY(-50%)');
    face.find('.name-2').addClass('active');
    switch(random){
        case 0: $('.change-color').css('background','#70d3d6');break;
        case 1: $('.change-color').css('background','#37bc98');break;
        case 2: $('.change-color').css('background','#ffd778');break;
        case 3: $('.change-color').css('background','#fcabab');break;
    }
    
}

// KCJason
$('.popup-opacity').click(function(){
    $(this).parent('.popup').fadeOut();
});

