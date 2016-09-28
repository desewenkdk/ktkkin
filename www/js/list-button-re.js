$(document).ready(function(){
  $('body').bind('touchmove', function(e){e.preventDefault()})
  var height = $(window).innerHeight();

  $(function(){

    var q = 0 , w = 0; //처음 내리는 다운버튼인지 보기
    var x = (height*1.1) , t = (height*1.45);


      var scrn = document.getElementById("wrap");

      Hammer(scrn).on("swipeleft", function() {

        $('.text-content').fadeOut(10,"swing");
        if(q == 0){
          x = -x ;
        }
        else {
          x -= t;
        }
          setTimeout(function(){
            $('.list-text').css('top',x+'px');
          },70);
          setTimeout(function(){
            $(".text-content").fadeIn(50,"swing");
          },1000);
          q = 1;
      });


       Hammer(scrn).on("swiperight", function() {

         $('.text-content').fadeOut(10,"swing");
           x += t;

           setTimeout(function(){ $('.list-text').css('top',x+'px');},70);
           setTimeout(function(){ $(".text-content").fadeIn(50,"swing");},1000);

      });

      Hammer(scrn).on("swipeup", function() {
        $('.list-text').css('top',x+'px');
    });

    Hammer(scrn).on("swipedown", function() {
          $('.list-text').css('top',x+'px');
    });

  });

  $('.backbtn').on('click', function() {
    location.href = "../index.html";
  });

/*
  function scrollByPixels(y) {
    $('html,body').stop().animate({
      scrollLeft: '+=' + y
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

 $('.home-btn').on('click',function(){
   location.href="../index.html";
 });


});
