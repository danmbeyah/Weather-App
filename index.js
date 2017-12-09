var express = require('express');

var app = express();

app.set('port', 3000);

app.get('/', function(req, res){
	res.send('Express works!');
});
app.listen(app.get('port'), function(){
	console.log('Express started. Ctrl + C to end');
});