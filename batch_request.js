var Batchelor = require('batchelor');

var batch = new Batchelor({
    'uri':'http://localhost:9999',
    'method':'GET',
    'headers': {
        'Content-Type': 'multipart/mixed'
    }
  });

batch.add([
    {
        'method':'GET',
        'path':'/studies'
    },
    {
        'method':'GET',
        'path':'/studies'
    },
    {
        'method':'GET',
        'path':'/studies'
    }
]);

batch.run(function(response){
  console.log(response);
});