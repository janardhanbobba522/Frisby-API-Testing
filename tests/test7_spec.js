var frisby=require('frisby');

var batchid ="123456"

frisby.create('DELETE load via "/batch/{batch ID}" and Verify. ')
  .delete('/batch/'+batchid)
  .expectStatus(500)
  .afterJSON(function(json) {
    frisby.create('GET load via "/batch/{batch ID (deleted batch id)}" and verify')
      .get('/batch/'+batchid)
      .expectStatus(404)
    .toss()
	  })
.toss()