$(document).ready(function(){
  document.addEventListener("backbutton", onBackKeyDown, false);
//  document.addEventListener("ondeviceready",onDeviceReady,false);

  function onBackKeyDown(e) {
     e.preventDefault();
     navigator.app.exitApp();
  }

var height = $(window).innerHeight();
var width = $(window).innerWidth();
//$('.back').css('height',(height)+'px');
//$('.bb').css('top',(height*0.5)+'px');
//$('.word').css('top',(height*0.53125)+'px');
//$('.logo').css('top',(height*0.26)+'px');
//$('.blk').css('height',(height* 0.155)+'px').css('padding-top',(height*0.014)+'px').css('font-size',(height* 0.026)+'px');
//$('.logo').css('height',(height* 0.38)+'px').css('width',(width*0.667)+'px');
//$('.logo').css('height',(height* 0.38)+'px').css('width',(width)+'px');
//$('.ikon').css('height',(height* 0.0625)+'px').css('width',(width*0.111111)+'px').css('margin-top',(height*0.0125)+'px').css('margin-bottom',(height*0.0125)+'px');

$('.but1').on('click',function(){
  location.href = "list/list1.html";
});

$('.but2').on('click',function(){
  location.href = "list/list2.html";
});

$('.but3').on('click',function(){
  location.href = "list/list3.html";
});

$('.but4').on('click',function(){
  location.href = "list/list4.html";
});

$('.but5').on('click',function(){
  location.href = "list/list5.html";
});

$('.but6').on('click',function(){
  location.href = "list/list6.html";
});

$('.but7').on('click',function(){
  location.href = "list/list7.html";
});

$('.but8').on('click',function(){
  location.href = "list/list8.html";
});

});
