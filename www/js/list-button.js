$(document).ready(function(){
  //$('.foot').bind('touchmove', function(e){e.preventDefault()});

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();

//  for(var q = 12 ; q > 4  ; q--  )
//  {
//    $('.list-text:nth-child('+q+')').css('visibility','hidden');
//  }
//ㅊ최적화

$('.home-btn').on('click',function(){
  location.href="../index.html";
});
/*
var aryLft = [];
for(var i = 1 ; i < 23 ; i++)
{
  aryLft[i] = i*width;
}

$('.main-button-1').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-2').on('click',function(){
  $('#wrap').css('left',-aryLft[2]+'px');
});
$('.main-button-3').on('click',function(){
  $('#wrap').css('left',-aryLft[3]+'px');
});
$('.main-button-4').on('click',function(){
  $('#wrap').css('left',-aryLft[4]+'px');
});
$('.main-button-5').on('click',function(){
  $('#wrap').css('left',-aryLft[5]+'px');
});
$('.main-button-6').on('click',function(){
  $('#wrap').css('left',-aryLft[6]+'px');
});
$('.main-button-7').on('click',function(){
  $('#wrap').css('left',-aryLft[7]+'px');
});
$('.main-button-8').on('click',function(){
  $('#wrap').css('left',-aryLft[8]+'px');
});
$('.main-button-9').on('click',function(){
  $('#wrap').css('left',-aryLft[9]+'px');
});
$('.main-button-10').on('click',function(){
  $('#wrap').css('left',-aryLft[10]+'px');
});
$('.main-button-11').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-12').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-13').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-14').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-15').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-16').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-17').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-18').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-19').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-20').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-21').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-22').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});
$('.main-button-23').on('click',function(){
  $('#wrap').css('left',-aryLft[1]+'px');
});

*/



});

/*
        if(flag_bottom == 0){

      $('.text-content').css('display','none');
        if(q == 0){
          x = -x ;
        }
        else {
          x -= t;
        }

          $('.list-text').css('top',x+'px');

          $('.list-text').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
            $(".text-content").css('display','inline');
          });

          q = 1;
          if(x == -x1){
          flag_top = 1;
        }
        else {
          flag_top=0;
        }
          if( -x == (x1+(t1*9))){
            flag_bottom = 1;
          }
        }

      });*/




/*
      Hammer(scrn).on("swipeup", function() {
        $('.list-text').css('top',x+'px');
    });

    Hammer(scrn).on("swipedown", function() {
          $('.list-text').css('top',x+'px');
    });
*/




/*
  function scrollByPixels(y) {
    $('html,body').stop().animate({
      scrollTop: '+=' + y
    });
  }

  $('.upbtn').on('click', function() {
      var f = window.pageYOffset;
      f %= height;
      if(f == 0){
        f = height;
      }
      scrollByPixels(-f);
  });

  $('.d-btn').on('click', function() {
    var f = window.pageYOffset;
    f %= height;
    if(f == 0){
      f = height;
    }
    scrollByPixels(f);
  });

  $('.f-btn').on('click', function() {
      var f = window.pageYOffset;
      window.scrollBy(0,-f);
  });
*/



/*
 $('.f-btn').on('click',function(){
   $('.main').css('visibility','inline');
   setTimeout(function(){ $(".text-content").fadeOut(10,"swing");},100);
   setTimeout(function(){ $('.list-text').css('top',(n)+'px');},200);
   setTimeout(function(){ window.scrollTo(0,0);},300);

   setTimeout(function(){ $(".text-content").fadeIn(50,"swing");},1500);
   q = 0;
   w = 0; //처음 내리는 다운버튼인지 보기
   x = (height*1.15);
   t = (height*1.45);

 });
*/
