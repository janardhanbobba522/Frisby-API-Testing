var frisby=require('frisby');
var config = require('../config.js');


var batchid ="123456"

frisby.create('GET load via "/batch/{batch ID}" and Verify.')
  .get(config.host+'/batch/'+batchid)
  .expectStatus(200)
  .inspectBody()
.toss()