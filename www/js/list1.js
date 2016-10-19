$(document).ready(function(){

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();
  var picture = [];
  var c = 0, c1 = 0, check = 0;
  var r = 0, x = 0;
  var aryLft = [];

  for(var i = 1 ; i < 11 ; i++)
  {
    aryLft[i] = i*width;
  }
  var a = ['http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=4310&ipp=10000#wrap',//안창호
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=648&ipp=10000',//김구
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=2511&ipp=10000',//노백린
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=10061&ipp=10000',//김종림
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=12862&ipp=10000',//박희성
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',//이용근
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=8464&ipp=10000',//한장호
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp'
];


$('#wrap').css('width',(width*11)+'px').css('height',(height)+'px');
$('.foot').css('left',(0)+'px');

if (window.location.hash === "#1-2-1-3") {
//  $('table').css('display','none');
//  setTimeout(function(){ $('#wrap').css('left',-aryLft[3]+'px'); }, 500);
 $('#wrap').css('left',-aryLft[3]+'px');
  r += (3*width);
}

if (window.location.hash === "#1-5-1-4") {
//  setTimeout(function(){ $('#wrap').css('left',-aryLft[4]+'px'); }, 500);
$('#wrap').css('left',-aryLft[4]+'px');
  r += (4*width);
}

if (window.location.hash === "#3-1-1-10") {
//  setTimeout(function(){ $('#wrap').css('left',-aryLft[10]+'px'); }, 500);
 $('#wrap').css('left',-aryLft[10]+'px');
  r += (10*width);
}

if (window.location.hash === "#8-2-1-2") {
//  setTimeout(function(){ $('#wrap').css('left',-aryLft[2]+'px'); }, 500);
$('#wrap').css('left',-aryLft[2]+'px');
  r += (2*width);
}

if (window.location.hash === "#11-1-1-1") {
//  setTimeout(function(){ $('#wrap').css('left',-aryLft[1]+'px'); }, 500);
$('#wrap').css('left',-aryLft[1]+'px');
  r += (1*width);
}

var scrn = scrn = document.getElementById("wrap");
$(function(){
    picture[1] = document.getElementById("picture-one");

    Hammer(picture[1]).on("tap", function() {
      if(c == 0){
      $('.picllong').css('width',((width*0.9)*4)+'px');
      $('#text-one').css("display",'none');
      $("#plus-one").css("overflow",'scroll').fadeIn(500,"swing");
      c = 1;
      check = 1;
      }
      else if(c == 1){
      $('#plus-one').css("overflow",'hidden').css("display",'none');
      $("#text-one").fadeIn(500,"swing");
      c = 0;
      check = 0;
      }
    });

    picture[2] = document.getElementById("picture-two");

    Hammer(picture[2]).on("tap", function() {

      if(c1 == 0){
        $('.picllong').css('width',((width*0.9)*4)+'px');
      $('#text-two').css("display",'none');
      $("#plus-two").css("overflow",'scroll').fadeIn(500,"swing");
      c1 = 1;
      check = 1;
      }
      else if(c1 == 1){
      $('#plus-two').css("overflow",'hidden').css("display",'none');
      $("#text-two").fadeIn(500,"swing");
      c1 = 0;
      check = 0;
      }
    });

    picture[3] = document.getElementById("picture-fourteen");

    Hammer(picture[3]).on("tap", function() {

      if(c1 == 0){
        $('.picllong').css('width',((width*0.9)*3)+'px');
      $('#text-fourteen').css("display",'none');
      $("#plus-fourteen").css("overflow",'scroll').fadeIn(500,"swing");
      c1 = 1;
      check = 1;
      }
      else if(c1 == 1){
      $('#plus-fourteen').css("overflow",'hidden').css("display",'none');
      $("#text-fourteen").fadeIn(500,"swing");
      c1 = 0;
      check = 0;
      }
    });

    picture[4] = document.getElementById("picture-fifteen");

    Hammer(picture[4]).on("tap", function() {

      if(c1 == 0){
        $('.picllong').css('width',(width*0.9)+'px');
      $('#text-fifteen').css("display",'none');
      $("#plus-fifteen").css("overflow",'scroll').fadeIn(500,"swing");
      c1 = 1;
      check = 1;
      }
      else if(c1 == 1){
      $('#plus-fifteen').css("overflow",'hidden').css("display",'none');
      $("#text-fifteen").fadeIn(500,"swing");
      c1 = 0;
      check = 0;
      }
    });



  });


    Hammer(scrn).on("swipeleft", function() {

      if( ((r >= width)&&(r < (width*10))) && (check == 0) ){

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


      $('.f-btn').on('click',function(){
        if(r == 0){
          location.href="../index.html";
        }
        else{
          location.href="../list/list1.html";
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


$('.tag').on('click', function() {
  if(r == 0){
    location.href = ' ';
  }
  else{
  x = r/width;
  location.href = a[x-1];}
});

/*
  $(window).scroll(function (){
    if(window.pageYOffset >= (height*11)){
      $('.d-btn').css('display','none');
      $('.slash-btn').css('display','inline');
    }
    else {
      $('.slash-btn').css('display','none');
      $('.d-btn').css('display','inline');

    }
});*/

/*
if(b == 1){
  $('.slash-btn').on('click', function() {

  setTimeout(function(){ $(".xline").fadeOut(1000,"swing");},300);
       $("#line").animate({top: "900px"});
       b -= 1;
  });
}
*/




});
