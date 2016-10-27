$(document).ready(function(){

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();
  var r = 0 , x = 0;
  var aryLft = [];
  for(var i = 1 ; i < 17 ; i++)
  {
    aryLft[i] = i*width;
  }
  var a = ['http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=3607&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=408&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=9299&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=6954&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=609&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=9108&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_view.asp?id=13302&ipp=10000',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp',
          'http:/www.mpva.go.kr/narasarang/gonghun_list.asp'
];
$('#wrap').css('width',(width*17)+'px').css('height',(height)+'px');
$('.foot').css('left',(0)+'px');

if (window.location.hash === "#1-3-3-2") {
  $('#wrap').css('left',-aryLft[2]+'px');
  r += (2*width);
}

if (window.location.hash === "#1-6-3-11") {
  $('#wrap').css('left',-aryLft[11]+'px');
  r += (11*width);
}

if (window.location.hash === "#2-3-3-4") {
  $('#wrap').css('left',-aryLft[4]+'px');
  r += (4*width);
}

if (window.location.hash === "#3-2-3-9") {
  $('#wrap').css('left',-aryLft[9]+'px');
  r += (9*width);
}

if (window.location.hash === "#3-4-3-1") {
  $('#wrap').css('left',-aryLft[1]+'px');
  r += (1*width);
}

if (window.location.hash === "#3-6-3-5") {
  $('#wrap').css('left',-aryLft[5]+'px');
  r += (5*width);
}

if (window.location.hash === "#3-7-3-3") {
  $('#wrap').css('left',-aryLft[3]+'px');
  r += (3*width);
}

if (window.location.hash === "#4-2-3-6") {
  $('#wrap').css('left',-aryLft[6]+'px');
  r += (6*width);
}

if (window.location.hash === "#7-4-3-12") {
  $('#wrap').css('left',-aryLft[12]+'px');
  r += (12*width);
}

if (window.location.hash === "#9-1-3-15") {
  $('#wrap').css('left',-aryLft[15]+'px');
  r += (15*width);
}

if (window.location.hash === "#10-1-3-10") {
  $('#wrap').css('left',-aryLft[10]+'px');
  r += (10*width);
}

if (window.location.hash === "#10-2-3-16") {
  $('#wrap').css('left',-aryLft[16]+'px');
  r += (16*width);
}

if (window.location.hash === "#10-5-3-8") {
  $('#wrap').css('left',-aryLft[8]+'px');
  r += (8*width);
}

if (window.location.hash === "#10-6-3-14") {
  $('#wrap').css('left',-aryLft[14]+'px');
  r += (14*width);
}

if (window.location.hash === "#12-2-3-7") {
  $('#wrap').css('left',-aryLft[7]+'px');
  r += (7*width);
}

$(function(){
    var scrn = document.getElementById("wrap");

    Hammer(scrn).on("swipeleft", function() {

      if( (r >= width)&&(r < (width*16)) ){

        r += width;
      $('#wrap').removeClass("trans").css('left',-(r)+'px');




   }
    });

    Hammer(scrn).on("swiperight", function() {
      if(r > width){

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
          $("#wrap").addClass("trans");
          r = 0;
            $('#wrap').css('left',0+'px');
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
    $('.tag').on('click', function() {
      if(r == 0){
        

        location.href = ' ';
      }
      else{


      x = r/width;

      location.href = a[x-1];}
    });


});
