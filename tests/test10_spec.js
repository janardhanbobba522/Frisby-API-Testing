var frisby=require('frisby');

var batchid ="123456"
var entryid ="123456"

var City = "Houston"
var Country = "USA"
var Street = ""
var Zip = ""

frisby.create('Post load via "/batch/{batch ID}/{entry ID}" API by setting values for City, Country, Street, Zip fields, where the values should be as below and Verify.')
  .post('/batch/'+batchid+"/"+entryid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()