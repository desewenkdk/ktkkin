$(document).ready(function(){

  var picture = [];
  var c = 0, c1 = 0, c2 = 0, c3 = 0;
  $(function(){
      picture[1] = document.getElementById("picture-seven");

      Hammer(picture[1]).on("tap", function() {

        if(c == 0){
        $('#text-seven').css("display",'none');
        $("#plus-seven").css("overflow",'scroll').fadeIn(500,"swing");
        c = 1;
        }
        else if(c == 1){
        $('#plus-seven').css("overflow",'hidden').css("display",'none');
        $("#text-seven").fadeIn(500,"swing");
        c = 0;
        }
      });

      picture[2] = document.getElementById("picture-eight");

      Hammer(picture[2]).on("tap", function() {

        if(c1 == 0){
        $('#text-eight').css("display",'none');
        $("#plus-eight").css("overflow",'scroll').fadeIn(500,"swing");
        c1 = 1;
        }
        else if(c1 == 1){
        $('#plus-eight').css("overflow",'hidden').css("display",'none');
        $("#text-eight").fadeIn(500,"swing");
        c1 = 0;
        }
      });
/*
      picture[3] = document.getElementById("picture-five");

      Hammer(picture[3]).on("tap", function() {

        if(c2 == 0){
        $('#text-five').css("display",'none');
        $("#plus-five").fadeIn(500,"swing");
        c2 = 1;
        }
        else if(c2 == 1){
        $('#plus-five').css("display",'none');
        $("#text-five").fadeIn(500,"swing");
        c2 = 0;
        }
      });

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
});
