$(document).ready(function(){
  var height = $(window).innerHeight();
  var width = $(window).innerWidth();

  $('.timefixhead').css('font-size',(width*0.0972222)+'px');
  $('.timelineicon').css('width',(width*0.111111111)+'px').css('height',(width*0.111111111)+'px');
  $('.themapic').css('height',((height-172)/3)+'px');
  $('.themapic-1').css('height',((height-172)/3)+'px');
  $('.thematext').css('font-size',(height*0.0296875)+'px');


  $('.t-home').on('click',function(){


    location.href="../index.html";

  });

  $('.t-backthema').on('click',function(){

    
    location.href="../list/list8.html";

  });


  $('.t-up').on('click',function(){
    $('html,body').animate({
        scrollTop: 0
    }, 700);
  });

  $('.themapic-one').on('click',function(){
    $(".themawrap").css("display","none");
    $(".t-home").css("display","none");
    $(".t-backthema").css("display","inline");
    $(".t-up").css("display","inline");
    $(".timefixhead").css("text-align","center");
    $(".fixheadtext").html("태동기에서 창군까지");
    $(".firstthema").css("display","inline");
    $(".firstthematopic").css("display","inline");
    $(".timecolor").css("background-color","rgb(237,85,101)");
    $(".t-hr").css("background-color","rgba(237,85,101,0.2)").css("border-color","rgb(237,85,101)");
    $(".timewrap").css("border-color","rgb(237,85,101)");
  });

  $('.themapic-two').on('click',function(){
    $(".themawrap").css("display","none");
    $(".t-home").css("display","none");
    $(".t-backthema").css("display","inline");
    $(".t-up").css("display","inline");
    $(".timefixhead").css("text-align","center");
    $(".fixheadtext").html("6.25전쟁과 공군");
    $(".secondthema").css("display","inline");
    $(".secondthematopic").css("display","inline");
    $(".timecolor").css("background-color","rgb(252,110,81)");
    $(".t-hr").css("background-color","rgba(252,110,81,0.2)").css("border-color","rgb(252,110,81)");
    $(".timewrap").css("border-color","rgb(252,110,81)");
  });

  $('.themapic-three').on('click',function(){
    $(".themawrap").css("display","none");
    $(".t-home").css("display","none");
    $(".t-backthema").css("display","inline");
    $(".t-up").css("display","inline");
    $(".timefixhead").css("text-align","center");
    $(".fixheadtext").html("대한민국 공군의 발전");
    $(".thirdthema").css("display","inline");
    $(".thirdthematopic").css("display","inline");
    $(".timecolor").css("background-color","rgb(255,206,84)");
    $(".t-hr").css("background-color","rgba(255,206,84,0.2)").css("border-color","rgb(255,206,84)");
    $(".timewrap").css("border-color","rgb(255,206,84)");
  });

  $('.themapic-four').on('click',function(){
    $(".themawrap").css("display","none");
    $(".t-home").css("display","none");
    $(".t-backthema").css("display","inline");
    $(".t-up").css("display","inline");
    $(".timefixhead").css("text-align","center");
    $(".fixheadtext").html("공군의 현대화");
    $(".fourththema").css("display","inline");
    $(".fourththematopic").css("display","inline");
    $(".timecolor").css("background-color","rgb(160,212,104)");
    $(".t-hr").css("background-color","rgba(160,212,104,0.2)").css("border-color","rgb(160,212,104)");
    $(".timewrap").css("border-color","rgb(160,212,104)");
  });

  $('.themapic-five').on('click',function(){
    $(".themawrap").css("display","none");
    $(".t-home").css("display","none");
    $(".t-backthema").css("display","inline");
    $(".t-up").css("display","inline");
    $(".timefixhead").css("text-align","center");
    $(".fixheadtext").html("공군의 오늘");
    $(".fifththema").css("display","inline");
    $(".fifththematopic").css("display","inline");
    $(".timecolor").css("background-color","rgb(72,207,173)");
    $(".t-hr").css("background-color","rgba(72,207,173,0.2)").css("border-color","rgb(72,207,173)");
    $(".timewrap").css("border-color","rgb(72,207,173)");
  });

});
