var frisby = require('frisby');


frisby.create('calling the API multiple times')
  .get('http://'localhost:9000'/api/v1/user_authentication/login?api_token='+api_token, {
  	"email": email,
 		"password": password
 	}, {json: true})
 	.inspectBody()
  .expectHeaderContains('Content-Type', 'json')
  .expectJSONTypes('', {
    user: {
      id: Number,
      name: String,
      email: String,
      auth_token: String,
      driver_number: String
    }
  })
  .afterJSON(function(json) {
    frisby.create('logout the session') 
      .get('http://'+your_host+'/api/v1/user_authentication/logout?api_token='+api_token+'&auth_token='+json.user.auth_token)
      .inspectBody()
      .toss()
	  })
.toss()