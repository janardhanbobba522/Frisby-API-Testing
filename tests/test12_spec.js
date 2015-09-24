var frisby=require('frisby');
var config = require('../config.js');

var batchid = config.batchid
var entryid = config.entryid

frisby.create('DELETE load via "/batch/{batch ID}/{entry ID}" and Verify.')
  .delete(config.host+'/batch/'+batchid+"/"+entryid)
  .expectStatus(200)
  .after(function(err, res, body) {
    frisby.create('GET load via "/batch/ {batch ID}/{entry ID (deleted entry id)}" and verify')
      .get(config.host+'/batch/'+batchid+"/"+entryid)
      .expectStatus(404)
    .toss()
	  })
.toss()