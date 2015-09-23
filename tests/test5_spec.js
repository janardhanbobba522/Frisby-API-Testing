var frisby=require('frisby');

var batchid ="123456"

frisby.create('GET load via "/batch/{batch ID}" and Verify.')
  .get('/batch/'+batchid)
  .expectStatus(200)
.toss()