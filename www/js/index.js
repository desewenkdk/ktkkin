function fcm(){
  FCMPlugin.onNotification(
    function(data){
      if(data.wasTapped){
        //Notification was received on device tray and tapped by the user.
        alert( JSON.stringify(data) );
      }else{
        //Notification was received in foreground. Maybe the user needs to be notified.
        alert( JSON.stringify(data) );
      }
    },
    function(msg){
      console.log('onNotification callback successfully registered: ' + msg);
    },
    function(err){
      console.log('Error registering onNotification callback: ' + err);
    }
  );
}

function onDeviceReady(){
  var token = FCMPlugin.getToken(
   function(token){
      alert(token);
      return token;
    },
    function(err){
      console.log('error retrieving token: ' + err);
    }
  );
  FCMPlugin.subscribeToTopic('topicExample');
  fcm();
}

function onPause(){
  alert("OnPause");
  fcm();
}

function onResume(){
  alert("OnResume");
  fcm();
}



$(document).ready(function(){

//  alert("index.js ready");

  document.addEventListener("backbutton", onBackKeyDown, false);
//  document.addEventListener("ondeviceready",onDeviceReady,false);
  document.addEventListener("deviceready",onDeviceReady, false);
  //document.addEventListener("pause",onPause, false);
  document.addEventListener("resume",onResume, false);


  function onBackKeyDown(e) {
     e.preventDefault();
     navigator.app.clearCache();
     navigator.app.clearHistory();
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

    height = 0;
    width = 0;
    picture = [];
    c = 0, c1 = 0, check = 0;
    r = 0, x = 0;
    aryLft = [];
    a = [];
    $("html").remove();
  //  $('.list-text').remove();
    //$('.first-list-text').remove();
  //  $('.bodyback1').remove();
    //alert(height+width+r+c+x+c1+check);
  //  alert(a);
  //  alert(aryLft);
  //  alert(picture);



//  alert(page_flag.list1);
  location.href="list/list1.html";
  /*if(page_flag.list1 == false) {
    page_flag.list1 = true;
    location.href = "list/list1.html";
  }
  else {
    location.replace("list/list1.html");
  }*/

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
