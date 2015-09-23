var frisby=require('frisby');

var batchid ="123456"
var entryid ="123456"

var City = ""
var Country = ""
var Street = ""
var Zip = ""

frisby.create('Post load via "/batch/{batch ID}/{entry ID}" API for the City, Country, Street, Zip fields without setting any values and Verify.')
  .post('/batch/'+batchid+"/"+entryid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()