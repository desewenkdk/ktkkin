$(document).ready(function(){

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();
  var picture = [];
  var c = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0, check = 0;
  var r = 0 , x = 0;
  var aryLft = [];
  for(var i = 1 ; i < 8 ; i++)
  {
    aryLft[i] = i*width;
  }
  var a = ['http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=8107&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp'
];
$('#wrap').css('width',(width*8)+'px').css('height',(height)+'px');
$('.foot').css('left',(0)+'px');

$(function(){
    picture[1] = document.getElementById("picture-three");

    Hammer(picture[1]).on("tap", function() {

      if(c == 0){
      $('.picllong').css('width',((width*0.9)*6)+'px');
      $('#text-three').css("display",'none');
      $("#plus-three").css("overflow",'scroll').fadeIn(500,"swing");
      c = 1;
      check = 1;
      }
      else if(c == 1){
      $('#plus-three').css("overflow",'hidden').css("display",'none');
      $("#text-three").fadeIn(500,"swing");
      c = 0;
      check = 0;
      }
    });

    picture[2] = document.getElementById("picture-four");

    Hammer(picture[2]).on("tap", function() {

      if(c1 == 0){
        $('.picllong').css('width',((width*0.9)*5)+'px');
      $('#text-four').css("display",'none');
      $("#plus-four").css("overflow",'scroll').fadeIn(500,"swing");
      c1 = 1;
      check = 1;
      }
      else if(c1 == 1){
      $('#plus-four').css("overflow",'hidden').css("display",'none');
      $("#text-four").fadeIn(500,"swing");
      c1 = 0;
      check = 0;
      }
    });

    picture[3] = document.getElementById("picture-five");

    Hammer(picture[3]).on("tap", function() {

      if(c2 == 0){
        $('.picllong').css('width',((width*0.9)*9)+'px');
      $('#text-five').css("display",'none');
      $("#plus-five").css("overflow",'scroll').fadeIn(500,"swing");
      c2 = 1;
      check = 1;
      }
      else if(c2 == 1){
      $('#plus-five').css("overflow",'hidden').css("display",'none');
      $("#text-five").fadeIn(500,"swing");
      c2 = 0;
      check = 0;
      }
    });

    picture[4] = document.getElementById("picture-six");

    Hammer(picture[4]).on("tap", function() {

      if(c3 == 0){
          $('.picllong').css('width',((width*0.9)*6)+'px');
      $('#text-six').css("display",'none');
      $("#plus-six").css("overflow",'scroll').fadeIn(500,"swing");
      c3 = 1;
      check = 1;
      }
      else if(c3 == 1){
      $('#plus-six').css("overflow",'hidden').css("display",'none');
      $("#text-six").fadeIn(500,"swing");
      c3 = 0;
      check = 0;
      }
    });

    picture[5] = document.getElementById("picture-twelve");

    Hammer(picture[5]).on("tap", function() {

      if(c4 == 0){
        $('.picllong').css('width',((width*0.9)*4)+'px');
      $('#text-twelve').css("display",'none');
      $("#plus-twelve").css("overflow",'scroll').fadeIn(500,"swing");
      c4 = 1;
      check = 1;
      }
      else if(c4 == 1){
      $('#plus-twelve').css("overflow",'hidden').css("display",'none');
      $("#text-twelve").fadeIn(500,"swing");
      c4 = 0;
        check = 0;
      }
    });



  });

$(function(){
    var scrn = document.getElementById("wrap");

    Hammer(scrn).on("swipeleft", function() {

      if( ((r >= width)&&(r < (width*7))) && (check == 0) ){

        r += width;
      $('#wrap').removeClass("trans").css('left',-(r)+'px');




   }
    });

    Hammer(scrn).on("swiperight", function() {
      if((r > width) && (check == 0)){

      r -= width;
      $('#wrap').removeClass("trans").css('left',-(r)+'px');

    }
    });
    });

      $('.f-btn').on('click',function(){
        if(r == 0){
          location.href="../index.html";
        }
        else{
          location.href="../list/list2.html";
        /*
        $("#wrap").addClass("trans");
          r = 0;
          check = 0;
        $('#wrap').css('left',0+'px');
        $('#plus-two').css("overflow",'hidden').css("display",'none');
        $("#text-two").fadeIn(500,"swing");
        c1 = 0;*/
        }
    });



    $('.main-button-1').on('click',function(){
      $('#wrap').css('left',-aryLft[1]+'px');
      r += width;

    });
    $('.main-button-2').on('click',function(){
      $('#wrap').css('left',-aryLft[2]+'px');
      r += (2*width);

    });
    $('.main-button-3').on('click',function(){
      $('#wrap').css('left',-aryLft[3]+'px');
      r += (3*width);

    });
    $('.main-button-4').on('click',function(){
      $('#wrap').css('left',-aryLft[4]+'px');
      r += (4*width);

    });
    $('.main-button-5').on('click',function(){
      $('#wrap').css('left',-aryLft[5]+'px');
      r += (5*width);

    });
    $('.main-button-6').on('click',function(){
      $('#wrap').css('left',-aryLft[6]+'px');
      r += (6*width);

    });
    $('.main-button-7').on('click',function(){
      $('#wrap').css('left',-aryLft[7]+'px');
      r += (7*width);

    });
    $('.tag').on('click', function() {
      if(r == 0){
        location.href = ' ';
      }
      else{
      x = r/width;

      location.href = a[x-1];}
    });

    $('a[href*=#]:not([href=#])').click(function() {

          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

              if (target.length) {
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 1000); // 시간 설정
                  return false;
              }
          }
      });

});
