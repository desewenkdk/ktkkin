$(document).ready(function(){
  var height = $(window).innerHeight();
  var d = new Date();
  var n = d.getMonth();

//  $('.wrap').css('height',(height*0.1875)+'px');
/*
  1 : 노백린,김종림,권기옥,이정희,나창준,
  2 : 이영무,전상국,신철수,이기협,전구서,
  3 : 윌로우스 비행학교,서왈보,안창남,김연기,임도현,김현일,박희동,
  4 : 민성기,강호륜,
  5 : 장덕창
  6 :
  7 : 이근석,김은제,박두원,유치곤,이경복,장동출,김성룡,
  8 : 김구,이일영,
  9 : 김정렬,박범집,차정신
  10 : 김공집,김원영,정재섭,장성철,천봉식,김도현,
  11 : 안창호,최용덕,이찬권,최종봉,김금성,
  12 : 임택순,최종성,이상수,오충현
  안알려짐: 박희성,이용근,이응호,노정민,한장호,김영환,박태하,손기중,이세영,고광수,딘헤스,이상희,박명렬.박인철
*/
n++;
n = 1;
  $(".block:nth-child("+n+")").css("display","inline");
/*1월달 인간들*/
      $('.but1-1-4-19').on('click',function(){
        $('.but1-1-4-19').css('background-color','rgba(60,83,111,1)');
        window.location.href="../list/list4.html#1-1-4-19";
      });
      $('.but1-2-1-3').on('click',function(){
        $('.but1-2-1-3').css('background-color','rgba(60,83,111,1)');
        window.location.href="../list/list1.html#1-2-1-3";
      });
      $('.but1-3-3-2').on('click',function(){
        $('.but1-3-3-2').css('background-color','rgba(60,83,111,1)');
        window.location.href="../list/list3.html#1-3-3-2";
      });
      $('.but1-4-1-4').on('click',function(){
        $('.but1-4-1-4').css('background-color','rgba(60,83,111,1)');
        window.location.href="../list/list1.html#1-4-1-4";
      });
      $('.but1-5-3-11').on('click',function(){
        $('.but1-5-3-11').css('background-color','rgba(60,83,111,1)');
        window.location.href="../list/list3.html#1-5-3-11";
      });



});
