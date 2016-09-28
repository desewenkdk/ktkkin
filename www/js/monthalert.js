$(document).ready(function(){
  document.addEventListener("deviceready",onDeviceReady,false);
  alert('111111',false,'notice','Done');
});
function onDeviceReady(){
  document.addEventListener("pause",onPause,false);
  document.addeventListener("resume",onResume,false);
}

function onPause(){
  navigator.notification.alert("onPause",false,'notice','done');
}

function onResume(){
  navigator.notification.alert("onResume",false,'notice','done');
}
