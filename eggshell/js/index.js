var random = 0;
var temp;
var faceArray =[$('#face-1'),$('#face-2'),$('#face-3'),$('#face-4')];
var rdmArray = [];
var exit = 0;
var i = 1;


$(document).ready(function(){

   setTimeout(function(){
          simulateTrigger($('#face-1'));
          rdmArray[0] = 0;
   },1000);

   setInterval(function(){

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
              simulateTrigger(faceArray[random]);
         
  },5000);
});

function simulateTrigger(face){
  $('.face').find('.cover').css('opacity',0.5);
  $('.face').find('.face-img').css('opacity','1');
  $('.face').find('.name-2').removeClass('active');
  face.find('.cover').css('opacity',0);
  face.find('.face-img').css('opacity','0');
  face.find('.name-2').addClass('active');
}