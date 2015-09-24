var frisby=require('frisby');
var config = require('../config.js');

var batchid = config.batchid

frisby.create('DELETE load via "/batch/{batch ID}" and Verify. ')
  .delete(config.host+'/batch/'+batchid)
  .expectStatus(200)
  .inspectBody()
  .after(function(err, res, body) {
    frisby.create('GET load via "/batch/{batch ID (deleted batch id)}" and verify')
      .get(config.host+'/batch/'+batchid)
      .expectStatus(404)
      .inspectBody()
    .toss()
	  })
.toss()