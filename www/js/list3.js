$(document).ready(function(){

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();
  var r = 0 , x = 0;
  var aryLft = [];
  for(var i = 1 ; i < 16 ; i++)
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
$('#wrap').css('width',(width*16)+'px').css('height',(height)+'px');
$('.foot').css('left',(0)+'px');


if (window.location.hash === "#1-3-3-2") {
  $('#wrap').css('left',-aryLft[2]+'px');
  r += (2*width);
}

if (window.location.hash === "#1-5-3-11") {
  $('#wrap').css('left',-aryLft[11]+'px');
  r += (11*width);
}
$(function(){
    var scrn = document.getElementById("wrap");

    Hammer(scrn).on("swipeleft", function() {

      if( (r >= width)&&(r < (width*15)) ){

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
