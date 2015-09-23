var frisby=require('frisby');

var batchid ="123456"
var entryid ="123456"

var City = "Chicago"
var Country = "USA"
var Street = "E106TH ST"
var Zip = "60601"


frisby.create('Post load via "/batch/{batch ID}/{entry ID}" API for the City, Country, Street, Zip fields without setting any values and Verify.')
  .put('/batch/'+batchid+"/"+entryid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()