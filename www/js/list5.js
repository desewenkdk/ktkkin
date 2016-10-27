$(document).ready(function(){

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();
  var picture = [];
  var c = 0, c1 = 0, c2 = 0, c3 = 0, check = 0;
  var r = 0 , x = 0;
  var aryLft = [];
  for(var i = 1 ; i < 5 ; i++)
  {
    aryLft[i] = i*width;
  }
  var a = ['http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=4310&ipp=10000#wrap',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=648&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=2511&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=2511&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=10061&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=12862&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=9810&ipp=10000',
          'https:/www.google.co.kr/search?q=%EC%9D%B4%EC%9D%91%ED%98%B8&oq=%EC%9D%B4%EC%9D%91%ED%98%B8&aqs=chrome..69i57j0l5.1534j0j4&sourceid=chrome&ie=UTF-8',
          'https:/www.google.co.kr/search?q=%EB%85%B8%EC%A0%95%EB%AF%BC&oq=%EB%85%B8%EC%A0%95%EB%AF%BC&aqs=chrome..69i57j0l5.1193j0j9&sourceid=chrome&ie=UTF-8',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=8464&ipp=10000',
          'https:/www.google.co.kr/search?q=%EC%9C%8C%EB%A1%9C%EC%9A%B0%EC%8A%A4+%EB%B9%84%ED%96%89%ED%95%99%EA%B5%90&oq=%EC%9C%8C%EB%A1%9C%EC%9A%B0%EC%8A%A4+%EB%B9%84%ED%96%89%ED%95%99%EA%B5%90&aqs=chrome..69i57.2554j0j9&sourceid=chrome&ie=UTF-8'
];
$('#wrap').css('width',(width*5)+'px').css('height',(height)+'px');
$('.foot').css('left',(0)+'px');

if (window.location.hash === "#10-3-5-2") {
  $('#wrap').css('left',-aryLft[2]+'px');
  r += (2*width);
}
if (window.location.hash === "#12-5-5-4") {
   $('#wrap').css('left',-aryLft[4]+'px');
  r += (4*width);
}

$(function(){
    picture[1] = document.getElementById("picture-nine");

    Hammer(picture[1]).on("tap", function() {

      if(c == 0){
        $('.picllong').css('width',((width*0.9)*4)+'px');
      $('#text-nine').css("display",'none');
      $("#plus-nine").css("overflow",'scroll').fadeIn(500,"swing");
      c = 1;
      check = 1;
      }
      else if(c == 1){
      $('#plus-nine').css("overflow",'hidden').css("display",'none');
      $("#text-nine").fadeIn(500,"swing");
      c = 0;
      check = 0;
      }
    });

    picture[2] = document.getElementById("picture-ten");

    Hammer(picture[2]).on("tap", function() {

      if(c1 == 0){
        $('.picllong').css('width',((width*0.9)*4)+'px');
      $('#text-ten').css("display",'none');
      $("#plus-ten").css("overflow",'scroll').fadeIn(500,"swing");
      c1 = 1;
      check = 1;
      }
      else if(c1 == 1){
      $('#plus-ten').css("overflow",'hidden').css("display",'none');
      $("#text-ten").fadeIn(500,"swing");
      c1 = 0;
      check = 0;
      }
    });

    picture[3] = document.getElementById("picture-eleven");

    Hammer(picture[3]).on("tap", function() {

      if(c2 == 0){
        $('.picllong').css('width',((width*0.9)*7)+'px');
      $('#text-eleven').css("display",'none');
      $("#plus-eleven").css("overflow",'scroll').fadeIn(500,"swing");
      c2 = 1;
      check = 1;
      }
      else if(c2 == 1){
      $('#plus-eleven').css("overflow",'hidden').css("display",'none');
      $("#text-eleven").fadeIn(500,"swing");
      c2 = 0;
      check = 0;
      }
    });

    picture[4] = document.getElementById("picture-eighteen");

    Hammer(picture[4]).on("tap", function() {

      if(c2 == 0){
        $('.picllong').css('width',((width*0.9)*6)+'px');
      $('#text-eighteen').css("display",'none');
      $("#plus-eighteen").css("overflow",'scroll').fadeIn(500,"swing");
      c2 = 1;
      check = 1;
      }
      else if(c2 == 1){
      $('#plus-eighteen').css("overflow",'hidden').css("display",'none');
      $("#text-eighteen").fadeIn(500,"swing");
      c2 = 0;
      check = 0;
      }
    });

/*
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

      if( ((r >= width)&&(r < (width*4))) && (check == 0) ){

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


          location.href="../list/list5.html";
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
    $('.tag').on('click', function() {
      if(r == 0){


        location.href = ' ';
      }
      else{
        

      x = r/width;

      location.href = a[x-1];}
    });



});
