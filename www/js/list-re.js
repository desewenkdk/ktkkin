$(document).ready(function(){

  var height = $(window).innerHeight();
  var width = $(window).innerWidth();


  $('.f-btn').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.07)+'px').css('margin-right',(width* 0.03)+'px');
  $('.upbtn').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.03)+'px').css('margin-right',(width* 0.03)+'px');
  $('.d-btn').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.03)+'px').css('margin-right',(width*0.03)+'px');
  $('.slash-btn').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.03)+'px').css('margin-right',(width*0.03)+'px');
  $('.tag').css('height',(width* 0.17)+'px').css('width',(width* 0.17)+'px').css('margin-left',(width* 0.03)+'px').css('margin-right',(width* 0.07)+'px');

  $('.ikon').css('height',(height* 0.1)+'px').css('width',(height* 0.1)+'px');
  $('.backbtn').css('height',(height* 0.125)+'px').css('width',(height* 0.125)+'px');
  $('h1').css('font-size',(height* 0.048)+'px');
  $('table').css('font-size',(height* 0.03)+'px');
  $('.y').css('font-size',(height* 0.024)+'px');
  $('.head').css('font-size',(height* 0.03)+'px');
  $('.text-content').css('font-size',(height* 0.0213)+'px');
  $('.tq').css('font-size',(height* 0.0213)+'px');
  $('.pp').css('font-size',(height* 0.0176)+'px');
  $('.ppp').css('font-size',(height* 0.015)+'px');
  $('.biq').css('font-size',(height* 0.045)+'px');
  $('.qwe').css('height',(height* 0.468)+'px');


  var hx = height*0.78;
  var hhx = height*11;
  $(window).scroll(function (){

      if(window.pageYOffset < hx ) {
            $('.foot').css('top',(height*0.875)+'px').css('height',0+'px');
            $('.f-btn').css('display','none');
            $('.upbtn').css('display','none');
            $('.tag').css('display','none');
            $('.d-btn').css('display','none');
            $('.slash-btn').css('display','none');
          }
      else if((window.pageYOffset == hhx) ) {
        $('.foot').css('top',(height*0.875)+'px').css('height',(height*0.14)+'px');
        $('.f-btn').css('display','inline');
        $('.upbtn').css('display','inline');
        $('.tag').css('display','inline');
        $('.d-btn').css('display','none');
        $('.slash-btn').css('display','inline');
      }
      else {
        $('.foot').css('top',(height*0.875)+'px').css('height',(height*0.14)+'px');
        $('.f-btn').css('display','inline');
        $('.upbtn').css('display','inline');
        $('.tag').css('display','inline');
        $('.d-btn').css('display','inline');
        $('.slash-btn').css('display','none');
        }

      });

      if(window.pageYOffset < hx ) {
            $('.foot').css('top',(height*0.875)+'px').css('height',0+'px');
            $('.f-btn').css('display','none');
            $('.upbtn').css('display','none');
            $('.tag').css('display','none');
            $('.d-btn').css('display','none');
            $('.slash-btn').css('display','none');
          }
      else if((window.pageYOffset == hhx) ) {
        $('.foot').css('top',(height*0.875)+'px').css('height',(height*0.14)+'px');
        $('.f-btn').css('display','inline');
        $('.upbtn').css('display','inline');
        $('.tag').css('display','inline');
        $('.d-btn').css('display','none');
        $('.slash-btn').css('display','inline');
      }
      else {
        $('.foot').css('top',(height*0.875)+'px').css('height',(height*0.14)+'px');
        $('.f-btn').css('display','inline');
        $('.upbtn').css('display','inline');
        $('.tag').css('display','inline');
        $('.d-btn').css('display','inline');
        $('.slash-btn').css('display','none');
        }

    $('.b').css('height',(height)+'px');
    $('.a').css('height',(height)+'px');

    $('.list-text').css('height',(height)+'px');
    $('.pic').css('height',(height*0.169)+'px').css('width',(height*0.169)+'px').css('border-radius',(height*0.902)+'px');


});
