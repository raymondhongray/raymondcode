var width,height;
var mouseX,mouseY;
var moveX,moveY,bmoveX,bmoveY;
var moveXRange = 3;
var moveYRange = 3;
var bmoveXRange = 3;
var bmoveYRange = 3;
var dot = $('.nav-dot'),
    dots = [$('#dot-1'),$('#dot-2'),$('#dot-3'),$('#dot-4')],
    backgrounds = [$('#background-b'),$('#background-g'),$('#background-y'),$('#background-p')];

$(document).ready(function(){
    width = $(this).width();
    height = $(this).height();
    // $('#content').fullpage();
      $('#content').fullpage({

        menu: true,
        anchors:['index'],
        slidesNavigation: true,
        navigationPosition: 'right',
        // 水平loop關閉否
        loopHorizontal: true,
        continuousVertical: false,

        easing: 'easeInQuart',
        easingcss3: 'ease',

        sectionSelector: '.section',
        slideSelector: '.slide',
        css3: true,

          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
          },
          onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
              dots[nextSlideIndex].addClass('active');
              dots[slideIndex].removeClass('active');
              backgrounds[nextSlideIndex].addClass('active');
              backgrounds[slideIndex].removeClass('active');
              switch(nextSlideIndex)
              {
                case 0:
                  $('header,.side,footer')
                  .removeClass('pink').removeClass('green').removeClass('yellow')
                  .addClass('blue');
                  $('.nav-dot')
                  .removeClass('pink-border').removeClass('green-border').removeClass('yellow-border')
                  .addClass('blue-border');
                  break;
                case 1:
                  $('header,.side,footer')
                  .removeClass('pink').removeClass('blue').removeClass('yellow')
                  .addClass('green');
                  $('.nav-dot')
                  .removeClass('pink-border').removeClass('blue-border').removeClass('yellow-border')
                  .addClass('green-border');
                  break;
              case 2:
                  $('header,.side,footer')
                  .removeClass('pink').removeClass('green').removeClass('blue')
                  .addClass('yellow');
                  $('.nav-dot')
                  .removeClass('pink-border').removeClass('blue-border').removeClass('green-border')
                  .addClass('yellow-border');
                  break;  
                  
              case 3:
                  $('header,.side,footer')
                  .removeClass('blue').removeClass('green').removeClass('yellow')
                  .addClass('pink');
                  $('.nav-dot')
                  .removeClass('green-border').removeClass('blue-border').removeClass('yellow-border')
                  .addClass('pink-border');
                  break;
              }
      }
    });

    intro();
    objectMove();



});

$('.nav-dot').click(function(){
    if( !$(this).hasClass('active') )
    {
      $.fn.fullpage.moveTo( 'index', $(this).index() );
    }
    console.log('dot');
});
$('#arrow-right').click(function(){
  console.log('left');
  $.fn.fullpage.moveSlideRight();
});
$('#arrow-left').click(function(){
  $.fn.fullpage.moveSlideLeft();
});

$('body').mousemove(function(e){
    objectMove(e);
});

function intro(){
  $('#background-b').addClass('active')
  // only first background
  .delay(400)
  .queue(function(){
    $('.therapist-wrap').addClass('active')
    .delay(400)
    .queue(function(){
      $('.therapist-content').addClass('active')
        .delay(400)
        .queue(function(){
          $('#nav-dot').addClass('active');
        })
    })
  })
  
}

function objectMove(e){
  mouseX = e.originalEvent.clientX;
  mouseY = e.originalEvent.clientY;
  moveX = mouseX/width * moveXRange;
  moveY = mouseY/height * moveYRange;
  bmoveX = mouseX/width * bmoveXRange;
  bmoveY = mouseY/height * bmoveYRange;

  $('.therapist').css({
    transform: 'translate('+moveX+'%,'+moveY+'%)'
  });
  $('.therapist-background').css({
    transform: 'translate('+'-'+bmoveX+'%,'+'-'+bmoveY+'%)'
  });
}