var frisby=require('frisby');

var batchid ="123456"

frisby.create('Post JSON string as body')
  .delete('/batch/'+batchid)
  .expectStatus(200)
  .afterJSON(function(json) {
    frisby.create('GET load via "/batch/{batch ID}" and Verify.')
      .get('/batch/'+batchid)
      .expectStatus(404)
    .toss()
	  })
.toss()