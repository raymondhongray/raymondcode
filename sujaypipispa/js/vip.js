$(document).ready(function(){


    $('#text-1').mouseover(function(){
        $('#tissue img').css('top','-2550px');
    });
    $('#text-2').mouseover(function(){
        $('#tissue img').css('top','0px');
    });

    function feather1(item,item2,time){
    item
    .stop()
    .delay(time)
    .css({top:'-100px'})
    .animate({ top:'60%', opacity:1 },{
        queue: false,
        duration: 3000,
        easing: 'easeOutCubic',
        start: function(){
            $(this).animate({left:'10%'},3000,'easeOutCubic');
        },
        complete: function(){
            console.log('complete');
            $(this).animate({top:'100%'},3000,'easeOutCubic');
        }
    })
    .delay(6000)
    .queue(function(){
        feather1(item,item2,time);
    });
    // .queue(function(){
    //  item2
    //  .stop()
    //  .css({top:'-100px'})
    //  .animate({ top:'30%', opacity:1 },{
    //      queue: false,
    //      duration: 3000,
    //      easing: 'easeOutCubic',
    //      start: function(){
    //          $(this).animate({left:'70%'},3000,'easeOutCubic')
    //      }
    //  })
    //  .animate({ top:'100%', opacity:1 },{
    //      queue: false,
    //      duration: 4000,
    //      easing: 'easeOutCubic',
    //      start: function(){
    //          $(this).animate({left:'60%'},4000,'easeOutCubic')
    //      } 
    //  })
    //  .queue(feather1(item,item2));
    // });

}



});



