var frisby=require('frisby');

var batchid =""

frisby.create('GET load via "/batch/{Without batch ID}" and Verify.')
  .get('/batch/'+batchid)
  .expectStatus(404)
.toss()