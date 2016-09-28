 var http = require('http');

 var express = require('express');
//create webserver
 var app = express();
 //var router = express.Router();
//전달할 데이터
var items = [{
    name : 'HyunSeok',
    value: '180110'
},{
    name : 'Yoonsik',
    value: 'Jjamji'
},{
  name : 'Jaehyun',
  value: 'Civilian'
}];


//app.use('/app',express.static('aaaaaaaaaaaa'));
//app.use(app.router);

//send data in html form.
app.post('/app2',function(request, response){
  var reqName = request.params.name[0];
  var reqValue = request.params.name[1];

  console.log("routing!"+ reqName);
  var output = "";

  output += '<!DOCTYPE html>' + '<html>' + '<body>';

  items.forEach(function(item){
    output += "<div>";
    if (item.name == reqName)
      output += "<h1>" + item.name + "</h1>";
    if(item.value == reqValue)
      output += "<h2>" + item.value + "</h2>";
    output += "</div>";
  });
  output += '</body>' + '</html>';
  response.send(output);
});


//send data in json form. - array
app.all('/data.json',function(request, response){
  response.send(items);
});


//send data from client
app.all('/parameter',function(request, response){
  //declare variables and set to request parameters.
  var name = request.param('name');
  var region = request.param('region');
  console.log('responding.......');

  //response.
  response.send('<h1>requested element : ' + name +'-'+ region +'</h1>');
  console.log(name+'/'+region);
});

 /*app.use(function(request, response, next){
     response.send('<h1>hello nodejs</h1>');
     next();
  });*/

app.use(function(request, response){
  request.test = "request.test"
  console.log(request.test);
});
 //execute webserver
http.createServer(app).listen(52273,function(){
  console.log('Server is running at http://127.0.0.1:52273');
});
