$(document).ready(function(){

  var picture = [];
  var c = 0, c1 = 0, c2 = 0, c3 = 0;
  $(function(){
      picture[1] = document.getElementById("picture-three");

      Hammer(picture[1]).on("tap", function() {

        if(c == 0){
        $('#text-three').css("display",'none');
        $("#plus-three").css("overflow",'scroll').fadeIn(500,"swing");
        c = 1;
        }
        else if(c == 1){
        $('#plus-three').css("overflow",'hidden').css("display",'none');
        $("#text-three").fadeIn(500,"swing");
        c = 0;
        }
      });

      picture[2] = document.getElementById("picture-four");

      Hammer(picture[2]).on("tap", function() {

        if(c1 == 0){
        $('#text-four').css("display",'none');
        $("#plus-four").css("overflow",'scroll').fadeIn(500,"swing");
        c1 = 1;
        }
        else if(c1 == 1){
        $('#plus-four').css("overflow",'hidden').css("display",'none');
        $("#text-four").fadeIn(500,"swing");
        c1 = 0;
        }
      });

      picture[3] = document.getElementById("picture-five");

      Hammer(picture[3]).on("tap", function() {

        if(c2 == 0){
        $('#text-five').css("display",'none');
        $("#plus-five").css("overflow",'scroll').fadeIn(500,"swing");
        c2 = 1;
        }
        else if(c2 == 1){
        $('#plus-five').css("overflow",'hidden').css("display",'none');
        $("#text-five").fadeIn(500,"swing");
        c2 = 0;
        }
      });

      picture[4] = document.getElementById("picture-six");

      Hammer(picture[4]).on("tap", function() {

        if(c3 == 0){
        $('#text-six').css("display",'none');
        $("#plus-six").css("overflow",'scroll').fadeIn(500,"swing");
        c3 = 1;
        }
        else if(c3 == 1){
        $('#plus-six').css("overflow",'hidden').css("display",'none');
        $("#text-six").fadeIn(500,"swing");
        c3 = 0;
        }
      });



    });
});
