$(document).ready(function(){


  var height = $(window).innerHeight();
  var width = $(window).innerWidth();
  var picture = [];
  var c = 0, c1 = 0, c2 = 0, c3 = 0, check = 0;
  var r = 0;
  var aryLft = [];
  for(var i = 1 ; i < 24 ; i++)
  {
    aryLft[i] = i*width;
  }
  var a = ['http:/www.mpva.go.kr/narasarang/gonghun_list.asp',//사람이 검색해서 안나옴...
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=10061&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=12862&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=9810&ipp=10000',
          'https:/www.google.co.kr/search?q=%EC%9D%B4%EC%9D%91%ED%98%B8&oq=%EC%9D%B4%EC%9D%91%ED%98%B8&aqs=chrome..69i57j0l5.1534j0j4&sourceid=chrome&ie=UTF-8',
          'https:/www.google.co.kr/search?q=%EB%85%B8%EC%A0%95%EB%AF%BC&oq=%EB%85%B8%EC%A0%95%EB%AF%BC&aqs=chrome..69i57j0l5.1193j0j9&sourceid=chrome&ie=UTF-8',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=8464&ipp=10000',
          'https:/www.google.co.kr/search?q=%EC%9C%8C%EB%A1%9C%EC%9A%B0%EC%8A%A4+%EB%B9%84%ED%96%89%ED%95%99%EA%B5%90&oq=%EC%9C%8C%EB%A1%9C%EC%9A%B0%EC%8A%A4+%EB%B9%84%ED%96%89%ED%95%99%EA%B5%90&aqs=chrome..69i57.2554j0j9&sourceid=chrome&ie=UTF-8'
];
$('#wrap').css('width',(width*24)+'px').css('height',(height)+'px');
$('.foot').css('left',(0)+'px');

if (window.location.hash === "#1-1-4-19") {
  $('#wrap').css('left',-aryLft[19]+'px');
  r += (19*width);
}


$(function(){
    picture[1] = document.getElementById("picture-seven");

    Hammer(picture[1]).on("tap", function() {

      if(c == 0){

        $('.picllong').css('width',((width*0.9)*4)+'px');
      $('#text-seven').css("display",'none');
      $("#plus-seven").css("overflow",'scroll').fadeIn(500,"swing");
      c = 1;
      check = 1;
      }
      else if(c == 1){
      $('#plus-seven').css("overflow",'hidden').css("display",'none');
      $("#text-seven").fadeIn(500,"swing");
      c = 0;
      check = 0;
      }
    });

    picture[2] = document.getElementById("picture-eight");

    Hammer(picture[2]).on("tap", function() {

      if(c1 == 0){
        $('.picllong').css('width',((width*0.9)*6)+'px');
      $('#text-eight').css("display",'none');
      $("#plus-eight").css("overflow",'scroll').fadeIn(500,"swing");
      c1 = 1;
      check = 1;
      }
      else if(c1 == 1){
      $('#plus-eight').css("overflow",'hidden').css("display",'none');
      $("#text-eight").fadeIn(500,"swing");
      c1 = 0;
      check = 0;
      }
    });

    picture[3] = document.getElementById("picture-thirteen");

    Hammer(picture[3]).on("tap", function() {

      if(c1 == 0){
        $('.picllong').css('width',((width*0.9)*4)+'px');
      $('#text-thirteen').css("display",'none');
      $("#plus-thirteen").css("overflow",'scroll').fadeIn(500,"swing");
      c1 = 1;
      check = 1;
      }
      else if(c1 == 1){
      $('#plus-thirteen').css("overflow",'hidden').css("display",'none');
      $("#text-thirteen").fadeIn(500,"swing");
      c1 = 0;
      check = 0;
      }
    });


/*
    picture[3] = document.getElementById("picture-five");

    Hammer(picture[3]).on("tap", function() {

      if(c2 == 0){
      $('#text-five').css("display",'none');
      $("#plus-five").fadeIn(500,"swing");
      c2 = 1;
      }
      else if(c2 == 1){
      $('#plus-five').css("display",'none');
      $("#text-five").fadeIn(500,"swing");
      c2 = 0;
      }
    });

    picture[4] = document.getElementById("picture-six");

    Hammer(picture[4]).on("tap", function() {

      if(c3 == 0){
      $('#text-six').css("display",'none');
      $("#plus-six").fadeIn(500,"swing");
      c3 = 1;
      }
      else if(c3 == 1){
      $('#plus-six').css("display",'none');
      $("#text-six").fadeIn(500,"swing");
      c3 = 0;
      }
    });

*/

  });



$(function(){
    var scrn = document.getElementById("wrap");

    Hammer(scrn).on("swipeleft", function() {

      if( ((r >= width)&&(r < (width*23))) && (check == 0) ){

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
          location.href="../list/list4.html";
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
    $('.main-button-8').on('click',function(){
      $('#wrap').css('left',-aryLft[8]+'px');
      r += (8*width);

    });
    $('.main-button-9').on('click',function(){
      $('#wrap').css('left',-aryLft[9]+'px');
      r += (9*width);

    });
    $('.main-button-10').on('click',function(){
      $('#wrap').css('left',-aryLft[10]+'px');
      r += (10*width);

    });
    $('.main-button-11').on('click',function(){
      $('#wrap').css('left',-aryLft[11]+'px');
      r += (11*width);

    });
    $('.main-button-12').on('click',function(){
      $('#wrap').css('left',-aryLft[12]+'px');
      r += (12*width);

    });
    $('.main-button-13').on('click',function(){
      $('#wrap').css('left',-aryLft[13]+'px');
      r += (13*width);

    });
    $('.main-button-14').on('click',function(){
      $('#wrap').css('left',-aryLft[14]+'px');
      r += (14*width);

    });
    $('.main-button-15').on('click',function(){
      $('#wrap').css('left',-aryLft[15]+'px');
      r += (15*width);

    });
    $('.main-button-16').on('click',function(){
      $('#wrap').css('left',-aryLft[16]+'px');
      r += (16*width);

    });
    $('.main-button-17').on('click',function(){
      $('#wrap').css('left',-aryLft[17]+'px');
      r += (17*width);

    });
    $('.main-button-18').on('click',function(){
      $('#wrap').css('left',-aryLft[18]+'px');
      r += (18*width);

    });
    $('.main-button-19').on('click',function(){
      $('#wrap').css('left',-aryLft[19]+'px');
      r += (19*width);

    });
    $('.main-button-20').on('click',function(){
      $('#wrap').css('left',-aryLft[20]+'px');
      r += (20*width);

    });
    $('.main-button-21').on('click',function(){
      $('#wrap').css('left',-aryLft[21]+'px');
      r += (21*width);

    });
    $('.main-button-22').on('click',function(){
      $('#wrap').css('left',-aryLft[22]+'px');
      r += (22*width);

    });
    $('.main-button-23').on('click',function(){
      $('#wrap').css('left',-aryLft[23]+'px');
      r += (23*width);

    });

    $('.tag').on('click', function() {
      if(r == 0){
        location.href = ' ';
      }
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
