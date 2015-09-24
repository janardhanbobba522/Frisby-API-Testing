var frisby=require('frisby');
var config = require('../config.js');

var batchid = config.batchid
var entryid = config.entryid

var City = "Houston"
var Country = "USA"
var Street = ""
var Zip = ""

frisby.create('Post load via "/batch/{batch ID}/{entry ID}" API by setting values for City, Country, Street, Zip fields, where the values should be as below and Verify.')
  .post(config.host+'/batch/'+batchid+"/"+entryid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()