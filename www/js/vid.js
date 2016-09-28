$(document).ready(function(){
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
