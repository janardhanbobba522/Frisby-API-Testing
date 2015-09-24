var frisby=require('frisby');
var config = require('../config.js');

var batchid =""

frisby.create('GET load via "/batch/{Without batch ID}" and Verify.')
  .get(config.host+'/batch/'+batchid)
  .expectStatus(200)
  .inspectBody()
.toss()