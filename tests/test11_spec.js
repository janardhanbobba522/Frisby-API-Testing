var frisby=require('frisby');
var config = require('../config.js');

var batchid = config.batchid
var entryid = config.entryid

var City = "Chicago"
var Country = "USA"
var Street = "E106TH ST"
var Zip = "60601"


frisby.create('Post load via "/batch/{batch ID}/{entry ID}" API for the City, Country, Street, Zip fields without setting any values and Verify.')
  .put(config.host+'/batch/'+batchid+"/"+entryid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()