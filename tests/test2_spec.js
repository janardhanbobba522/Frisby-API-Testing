var frisby=require('frisby');

var batchid ="123456"

var City = "@@@"
var Country = "$$$"
var Street = "###"
var Zip = "00000"

frisby.create('Post load via "/batch/{batch ID}" API by setting below Invalid values for City, Country, Street, Zip fields, where the values should be as below and Verify.')
  .post('/batch/'+batchid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()