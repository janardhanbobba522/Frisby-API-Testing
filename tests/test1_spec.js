var frisby=require('frisby');

var batchid ="123456"
var City = "New York"
var Country = "USA"
var Street = "Charles Street "
var Zip = "02114"

frisby.create('Post load via "/batch/{batch ID}" API by setting below valid values for City, Country, Street, Zip fields, where the values should be as below and Verify.')
  .post('/batch/'+batchid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()