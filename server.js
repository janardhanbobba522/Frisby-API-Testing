var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 5000;

var del = false
var data = {}
var letters = /^[A-Za-z ]+$/;
var numeric_letters = /^[A-Za-z0-9 ]+$/;
var numeric = /^[0-9 ]+$/;

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req,res){
	res.send("Welcome!!!");
});

app.get('/batch/', function(req,res){
	console.log(req.params.batchid)
	console.log(req.query)
	res.statusCode = 400;
	res.send('{success:"false",message:"Invalid Batch ID"}');
});

app.get('/batch/:batchid', function(req,res){
	console.log(req.params.batchid)
	console.log(req.query)
	if(del){
		del = false;
		res.statusCode = 404;
		res.send('{success:"false",message:"No Batch ID found"}');
	}
	else if(req.params.batchid == ""){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid Batch ID"}');
	}
	else{
		res.statusCode = 200;
		res.send(data);
	}
});

app.get('/batch/:batchid/:entryid', function(req,res){
	console.log(req.params.batchid)
	console.log(req.query)
	if(del){
		del = false;
		res.statusCode = 404;
		res.send('{success:"false",message:"No Batch ID found"}');
	}
	else if(req.params.batchid == ""){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid Batch ID"}');
	}
	else{
		res.statusCode = 200;
		res.send(data);
	}
});

app.delete('/batch/:batchid', function(req,res){
	console.log(req.params.batchid);
	console.log(req.query);
	data={};
	del=true;
	res.statusCode = 200;
	res.send();
});

app.delete('/batch/:batchid/:entryid', function(req,res){
	console.log(req.params.batchid);
	console.log(req.query);
	data={};
	del=true;
	res.statusCode = 200;
	res.send();
});

app.post('/batch/:batchid', function(req,res){
	console.log(req.params.batchid)
	console.log(req.body)
	if(req.body.City.match(letters) == null){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid City"}');
	}
	else if(req.body.Country.match(letters) == null){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid Country"}');
	}
	else{
		data=req.body
		res.statusCode = 200;
		res.send('{success:"true"}');
	}
});


app.post('/batch/:batchid/:entryid', function(req,res){
	console.log(req.params)
	console.log(req.body)
	if(req.body.City.match(letters) == null){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid City"}');
	}
	else if(req.body.Country.match(letters) == null){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid Country"}');
	}
	else{
		data=req.body
		res.statusCode = 200;
		res.send('{success:"true"}');
	}
});


app.put('/batch/:batchid/:entryid', function(req,res){
	console.log(req.params)
	console.log(req.body)
	if(req.body.City.match(letters) == null){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid City"}');
	}
	else if(req.body.Country.match(letters) == null){
		res.statusCode = 400;
		res.send('{success:"false",message:"Invalid Country"}');
	}
	else{
		data=req.body
		res.statusCode = 200;
		res.send('{success:"true"}');
	}
});


app.listen(port, function(){
	console.log("App is running on "+ port);
});