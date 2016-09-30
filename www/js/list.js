 $(document).ready(function(){

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();
//E89048

  $('.f-btn').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.12)+'px').css('margin-right',(width* 0.06)+'px');
  $('.tag').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.06)+'px').css('margin-right',(width* 0.12)+'px');
  $('.home-btn').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.06)+'px').css('margin-right',(width* 0.06)+'px');

  $('.t-up').css('height',(width* 0.15)+'px').css('width',(width* 0.15)+'px').css('margin-left',(width* 0.14)+'px').css('margin-right',(width* 0.2)+'px');
  $('.t-home').css('height',(width* 0.15)+'px').css('width',(width* 0.15)+'px').css('margin-left',(width* 0.2)+'px').css('margin-right',(width* 0.14)+'px');
  $('.bodyback1').css('height',(height)+'px');
  $('.bodyback2').css('height',(height)+'px');
  $('.bodyback3').css('height',(height)+'px');
  $('.bodyback4').css('height',(height)+'px');
  $('.bodyback5').css('height',(height)+'px');
  $('.ikon').css('height',(height* 0.1)+'px').css('width',(height* 0.1)+'px');
  //$('.backbtn').css('height',(height* 0.125)+'px').css('width',(height* 0.125)+'px');
  //$('h1').css('font-size',(height* 0.048)+'px');
  //$('table').css('font-size',(height* 0.03)+'px');
  $('.y').css('font-size',(height* 0.025)+'px');
  $('.t-2').css('top',(height/2)+'px').css('height',(height/2)+'px');
  $('.t-1').css('height',(height/2)+'px');
  $('.p-t').css('width',(width*0.9)+'px').css('font-size',(height* 0.02)+'px');
  $('.plussize').css('width',(width*0.9)+'px');


  $('.y-2').css('font-size',(height* 0.025)+'px');
//  $('.bd').css('font-size',(height* 0.022)+'px');
  $('.fx2').css('font-size',(height* 0.032)+'px');
  $('.fx').css('font-size',(height* 0.032)+'px');
  $('.fx-1').css('font-size',(height* 0.032)+'px');
  $('.fx-4').css('font-size',(height* 0.032)+'px');
    $('.fx-3').css('font-size',(height* 0.032)+'px');
//  $('.head').css('font-size',(height* 0.03)+'px');
//  $('.head-2').css('font-size',(height* 0.03)+'px');
//  $('.tq').css('font-size',(height* 0.0213)+'px');
  $('.pp').css('font-size',(height* 0.0176)+'px');
  $('.ppp').css('font-size',(height* 0.015)+'px');
//  $('.biq').css('font-size',(height* 0.045)+'px');
//  $('.qwe').css('height',(height* 0.468)+'px');
  $('.foot').css('top',(height*0.875)+'px').css('height',(height*0.14)+'px');
  $('.text-body').css('max-height',(height* 0.58)+'px');
  $('.text-wrap').css('max-height',(height* 0.58)+'px');
  $('.plus').css('max-height',(height* 0.556)+'px');
  $('.long').css('max-height',(height* 0.556)+'px');

//  $('.middle').css('top',(height*0.4)+'px').css('height',(height*0.2)+'px');

  var hx = height*0.78;
  var hhx = height*11;
  $(window).scroll(function (){
});


//.css('height',(height)+'px')
    $('.first-list-text').css('width',(width)+'px');
    $('.list-text').css('width',(width)+'px').css('font-size',(height* 0.0213)+'px');/*.css('font-size',(height* 0.0213)+'px')*/
    $('.pic').css('height',(height*0.169)+'px').css('width',(height*0.169)+'px').css('border-radius',(height*0.902)+'px');
    $('.morepic').css('top',(height*0.125)+'px').css('left',(height*0.146875)+'px')

    $('.home-btn').on('click',function(){
      location.href="../index.html";
    });

    var scrn = document.getElementById("wrap");

    Hammer(scrn).on("pinchin", function() {

      if( ((r >= width)&&(r < (width*7))) && (check == 0) ){
      $('.list-text').addClass("xqwq").css('font-size',30+'px');
    }

    });
    Hammer(scrn).on("pinchout", function() {

      if( ((r >= width)&&(r < (width*7))) && (check == 0) ){
      $('.list-text').addClass("xqwq").css('font-size',(height* 0.0213)+'px');



    }

    });

});
