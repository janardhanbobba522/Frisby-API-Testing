var frisby=require('frisby');
var config = require('../config.js');

var batchid ="123456"

var City = ""
var Country = ""
var Street = ""
var Zip = ""

frisby.create('Post load via "/batch/{batch ID}" API for the City, Country, Street, Zip fields without setting any values and Verify. ')
  .post(config.host+'/batch/'+batchid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()