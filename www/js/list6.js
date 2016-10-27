$(document).ready(function(){
  var height = $(window).innerHeight();
  var checkggg = false, checkgg = false, checkg = false;
  var wrap_ggg = 0,wrap_gg = 0,wrap_g = 0;

    $(".uccHome").on("click",function(){

    
    location.href = "../index.html";
  });


  $(".ggg").on("click",function(){
    if(checkggg != true){
    $(".ggg").removeClass("ucccolor14").addClass("ucccolor13");
    $(".videoBlock-ggg").css("display",'inline-block');
//    $(".videoBlock-ggg").css("height",60+'px');
  //  $(".videoText-ggg").css("display","inline-block").addClass("videoTrans").css("opacity",1);

    checkggg = true;
  }
  else {
    $(".ggg").removeClass("ucccolor13").addClass("ucccolor14");
    $(".videoBlock-ggg").css("display",'none');
  //  $(".videoBlock-ggg").css("height",0+'px');
  //  $(".videoText-ggg").css("opacity",0).css("display","none");
    checkggg = false;
  }
});



$(".gg").on("click",function(){
  if(checkgg != true){
  $(".gg").removeClass("ucccolor12").addClass("ucccolor10");
  $(".videoBlock-gg").css("display",'inline-block');
//  $(".videoBlock-gg").css("height",60+'px');
//  $(".videoText-gg").css("display","inline-block").css("opacity",1);

  checkgg = true;
}
else {
  $(".gg").removeClass("ucccolor10").addClass("ucccolor12");
  $(".videoBlock-gg").css("display",'none');
//  $(".videoBlock-gg").css("height",0+'px');
//  $(".videoText-gg").css("opacity",0).css("display","none");
  checkgg = false;
}
});



$(".g").on("click",function(){
  if(checkg != true){
  $(".g").removeClass("ucccolor18").addClass("ucccolor16");
  $(".videoBlock-g").css("display",'inline-block');
//  $(".videoBlock-g").css("height",60+'px');
//  $(".videoText-g").css("display","inline-block").css("opacity",1);

  checkg = true;
}
else {
  $(".g").removeClass("ucccolor16").addClass("ucccolor18");
  $(".videoBlock-g").css("display",'none');
//  $(".videoBlock-g").css("height",0+'px');
//  $(".videoText-g").css("opacity",0).css("display","none");
  checkg = false;
}
});






  var vid = document.getElementById('video1');


  $('#video1').css({
      width : 300 + 'px'
  });

  $("#play").on("click",function(){
    if (vid.paused)
      vid.play();
    else {
      vid.pause();
    }
  });
});
