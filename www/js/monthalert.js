
$(document).ready(function(){
    document.addEventListener("ondeviceready",onDeviceReady,false);
});


function onDeviceReady(){
  navigator.notification.alert("onDeviceReady");
  console.log('get on backgrond');

  var fcm1 = new FCMPlugin();
  fcm1.subscribeToTopic('kkinPush',function(){alert('topic inserted!'); console.log('topic settled')});

  fcm1.onNotification(
    function(data){
      if(data.wasTapped){
        //Notification was received on device tray and tapped by the user.
        navigator.notification.alert( "in background"+JSON.stringify(data) );
        console.log('get on backgrond');
      }else{
        //Notification was received in foreground. Maybe the user needs to be notified.
        navigator.notification.alertalert( "in foreground"+JSON.stringify(data) );
        console.log('get on foreground');
      }
    },
    function(msg){
      console.log('onNotification callback successfully registered: ' + msg);
      navigator.notification.alert( "in background"+JSON.stringify(data) );
    },
    function(err){
      console.log('Error registering onNotification callback: ' + err);
      navigator.notification.alert( "in background"+JSON.stringify(data) );
    }
  );
  location.href = "./list/loadsuccess.html"
  document.addEventListener("pause",onPause,false);
  document.addeventListener("resume",onResume,false);
}

function onPause(){
  navigator.notification.alert("onPause",false,'notice','done');
}

function onResume(){
  navigator.notification.alert("onResume",false,'notice','done');
}
