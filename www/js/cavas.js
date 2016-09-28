$(document).ready(function(){

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.css("width","100%").css("height","300px").css("position","fixed").css("z-index","100000");

$(canvas).on({
  mousedown: function(event){
    var position = $this.offset();
    var mouseX = event.pageX - position.left;
    var mouseY = event.pageY - position.top;

    context.beginPath();
    context.moveTo(mouseX, mouseY);
  },

  mouseup : function(event){
    var position = $this.offset();
    var mouseX = event.pageX - position.left;
    var mouseY = event.pageY - position.top;

    context.lineTo(mouseX, mouseY);
    context.stroke();
  }
  });

});
