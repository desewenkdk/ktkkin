$(document).ready(function(){

  var height = $(window).innerHeight();
  var d = new Date();
  var n = d.getMonth();

//  $('.wrap').css('height',(height*0.1875)+'px');
/*
  1 : 노백린,김종림,권기옥,이정희,나창준,이근석
  2 : 전상국,신철수,이기협,전구서,
  3 : 윌로우스 비행학교,서왈보,안창남,김연기,임도현,김현일,박희동,이영무
  4 : 민성기,강호륜,
  5 : 장덕창
  6 :
  7 : 김은제,박두원,유치곤,이경복,장동출,김성룡,
  8 : 김구,이일영,
  9 : 김정렬,박범집,차정신,최용덕
  10 : 김공집,김원영,정재섭,장성철,천봉식,김도현,
  11 : 안창호,이찬권,최종봉,김금성,
  12 : 임택순,최종성,이상수,오충현,딘헤스,박태하
  안알려짐: 박희성,이용근,이응호,노정민,한장호,김영환,손기중,이세영,고광수,딘헤스,이상희,박명렬.박인철
*/
n++;
function headcolor (){
  switch(n){
    case 1 :  $(".tocolor").css("background-color","#3bafda"); break;
    case 2 :  $(".tocolor").css("background-color","#d670ac"); break;
    case 3 :  $(".tocolor").css("background-color","#9ed36a"); break;
    case 4 :  $(".tocolor").css("background-color","#46cead"); break;
    case 5 :  $(".tocolor").css("background-color","#46cead"); break;
    case 6 :  $(".tocolor").css("background-color","#9ed36a"); break;
    case 7 :  $(".tocolor").css("background-color","#d94452"); break;
    case 8 :  $(".tocolor").css("background-color","#fc8370"); break;
    case 9 :  $(".tocolor").css("background-color","#d670ac"); break;
    case 10 :  $(".tocolor").css("background-color","#35bb9b"); break;
    case 11 :  $(".tocolor").css("background-color","#d94452"); break;
    case 12 :  $(".tocolor").css("background-color","#46cead"); break;
    default : break;
  }
}
var blk = height*0.18;
$('.toheader').css('height',(height*0.21875)+'px').css('font-size',(height*0.0546875)+'px');
$('.headerback').css('height',(height*0.0625)+'px').css('width',(height*0.0625)+'px');

$('.towrap').css('top',(height*0.21875)+'px');
$('.toblock').css('height',(height*0.178125)+'px');
$('.toroupic').css('height',(height*0.140625)+'px').css('width',(height*0.140625)+'px');
$('.toroupic-1').css('height',(height*0.140625)+'px').css('width',(height*0.140625)+'px');
$('.toname').css('font-size',(height*0.0359375)+'px');
$('.toname-1').css('font-size',(height*0.0359375)+'px');
$('.toyear').css('font-size',(height*0.025)+'px');
$('.monthtext-1').css('font-size',(height*0.0234375)+'px');
$('.monthtext').css('font-size',(height*0.028125)+'px');
$('.todaywhitebackpage4-2').css('height',(blk*2)+'px');
$('.todaywhitebackpage5-3').css('height',(blk*3)+'px');
$('.todaywhitebackpage6-4').css('height',(blk*4)+'px');
  headcolor();
  $(".sidemonth:nth-child("+n+")").css("display","inline");

  var toscrn = document.getElementById("todaywrap");

  Hammer(toscrn).on("swipeleft", function() {
    if(n != 12){
    $(".sidemonth:nth-child("+n+")").css("display","none");
    n++;
    headcolor();
    $(".sidemonth:nth-child("+n+")").fadeIn(500,"swing");
  }
  else {
    $(".sidemonth:nth-child("+n+")").css("display","none");
    n = 1;
    headcolor();
    $(".sidemonth:nth-child("+n+")").fadeIn(500,"swing");
  }
  });

  Hammer(toscrn).on("swiperight", function() {
    if(n != 1){
    $(".sidemonth:nth-child("+n+")").css("display","none");
    n--;
    headcolor();
    $(".sidemonth:nth-child("+n+")").fadeIn(500,"swing");
  }
  else {
    $(".sidemonth:nth-child("+n+")").css("display","none");
    n = 12;
    headcolor();
    $(".sidemonth:nth-child("+n+")").fadeIn(500,"swing");
  }
  });


  $('.timebackhome').on('click',function(){
    window.location.href="../index.html";
  });


/*1월달 인간들*/
      $('.but1-1-4-19').on('click',function(){
        $('.but1-1-4-19').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#1-1-4-19";
      });
      $('.but1-2-1-3').on('click',function(){
        $('.but1-2-1-3').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list1.html#1-2-1-3";
      });
      $('.but1-3-3-2').on('click',function(){
        $('.but1-3-3-2').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#1-3-3-2";
      });
      $('.but1-4-2-7').on('click',function(){
        $('.but1-4-2-7').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list2.html#1-4-2-7";
      });
      $('.but1-5-1-4').on('click',function(){
        $('.but1-5-1-4').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list1.html#1-5-1-4";
      });
      $('.but1-6-3-11').on('click',function(){
        $('.but1-6-3-11').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#1-6-3-11";
      });



      $('.but2-1-4-15').on('click',function(){
        $('.but2-1-4-15').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#2-1-4-15";
      });
      $('.but2-2-4-22').on('click',function(){
        $('.but2-2-4-22').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#2-2-4-22";
      });
      $('.but2-3-3-4').on('click',function(){
        $('.but2-3-3-4').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#2-3-3-4";
      });
      $('.but2-4-4-13').on('click',function(){
        $('.but2-4-4-13').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#2-4-4-13";
      });


      $('.but3-1-1-10').on('click',function(){
        $('.but3-1-1-10').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list1.html#3-1-1-10";
      });
      $('.but3-2-3-9').on('click',function(){
        $('.but3-2-3-9').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#3-2-3-9";
      });
      $('.but3-3-4-16').on('click',function(){
        $('.but3-3-4-16').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#3-3-4-16";
      });
      $('.but3-4-3-1').on('click',function(){
        $('.but3-4-3-1').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#3-4-3-1";
      });
      $('.but3-5-2-4').on('click',function(){
        $('.but3-5-2-4').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list2.html#3-5-2-4";
      });
      $('.but3-6-3-5').on('click',function(){
        $('.but3-6-3-5').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#3-6-3-5";
      });
      $('.but3-7-3-3').on('click',function(){
        $('.but3-7-3-3').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#3-7-3-3";
      });
      $('.but3-8-4-12').on('click',function(){
        $('.but3-8-4-12').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#3-8-4-12";
      });


      $('.but4-1-4-6').on('click',function(){
        $('.but4-1-4-6').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#4-1-4-6";
      });
      $('.but4-2-3-6').on('click',function(){
        $('.but4-2-3-6').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#4-2-3-6";
      });


      $('.but5-1-2-3').on('click',function(){
        $('.but5-1-2-3').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list2.html#5-1-2-3";
      });

      $('.but6-1-2-6').on('click',function(){
        $('.but6-1-2-6').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list2.html#6-1-2-6";
      });

      $('.but7-1-4-1').on('click',function(){
        $('.but7-1-4-1').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#7-1-4-1";
      });
      $('.but7-2-4-21').on('click',function(){
        $('.but7-2-4-21').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#7-2-4-21";
      });
      $('.but7-3-4-8').on('click',function(){
        $('.but7-3-4-8').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#7-3-4-8";
      });
      $('.but7-4-3-12').on('click',function(){
        $('.but7-4-3-12').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#7-4-3-12";
      });
      $('.but7-5-4-5').on('click',function(){
        $('.but7-5-4-5').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#7-5-4-5";
      });
      $('.but7-6-4-17').on('click',function(){
        $('.but7-6-4-17').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#7-6-4-17";
      });



      $('.but8-1-4-9').on('click',function(){
        $('.but8-1-4-9').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#8-1-4-9";
      });
      $('.but8-2-1-2').on('click',function(){
        $('.but8-2-1-2').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list1.html#8-2-1-2";
      });


      $('.but9-1-3-15').on('click',function(){
        $('.but9-1-3-15').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#9-1-3-15";
      });
      $('.but9-2-2-5').on('click',function(){
        $('.but9-2-2-5').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list2.html#9-2-2-5";
      });
      $('.but9-3-2-1').on('click',function(){
        $('.but9-3-2-1').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list2.html#9-3-2-1";
      });
      $('.but9-3-2-2').on('click',function(){
        $('.but9-3-2-2').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list2.html#9-3-2-2";
      });



      $('.but10-1-3-10').on('click',function(){
        $('.but10-1-3-10').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#10-1-3-10";
      });
      $('.but10-2-3-16').on('click',function(){
        $('.but10-2-3-16').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#10-2-3-16";
      });
      $('.but10-3-5-2').on('click',function(){
        $('.but10-3-5-2').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list5.html#10-3-5-2";
      });
      $('.but10-4-4-7').on('click',function(){
        $('.but10-4-4-7').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#10-4-4-7";
      });
      $('.but10-5-3-8').on('click',function(){
        $('.but10-5-3-8').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#10-5-3-8";
      });
      $('.but10-6-3-14').on('click',function(){
        $('.but10-6-3-14').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#10-6-3-14";
      });



      $('.but11-1-1-1').on('click',function(){
        $('.but11-1-1-1').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list1.html#11-1-1-1";
      });
      $('.but11-2-4-14').on('click',function(){
        $('.but11-2-4-14').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#11-2-4-14";
      });
      $('.but11-3-4-20').on('click',function(){
        $('.but11-3-4-20').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#11-3-4-20";
      });
      $('.but11-4-4-11').on('click',function(){
        $('.but11-4-4-11').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#11-4-4-11";
      });



      $('.but12-1-4-23').on('click',function(){
        $('.but12-1-4-23').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#12-1-4-23";
      });
      $('.but12-2-3-7').on('click',function(){
        $('.but12-2-3-7').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list3.html#12-2-3-7";
      });
      $('.but12-3-4-18').on('click',function(){
        $('.but12-3-4-18').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#12-3-4-18";
      });
      $('.but12-4-4-10').on('click',function(){
        $('.but12-4-4-10').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#12-4-4-10";
      });
      $('.but12-5-5-4').on('click',function(){
        $('.but12-5-5-4').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list5.html#12-5-5-4";
      });
      $('.but12-6-4-4').on('click',function(){
        $('.but12-6-4-4').css('background-color','rgb(0,0,0)');
        window.location.href="../list/list4.html#12-6-4-4";
      });

      document.addEventListener("backbutton", onBackKeyDown, false);

      function onBackKeyDown(e) {
         e.preventDefault();
         location.href = "../index.html";
      }
});
