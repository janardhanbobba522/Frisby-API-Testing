var frisby=require('frisby');

var your_host="dreamorbitdemo1.cloudapp.net:81"
var api_token="qKSY5m9ckzPdhxszcfXT16F85"
var email ="manas1.ranjan@dreamorbit.com"
var password="password"

frisby.create('Post JSON string as body')
  .post('http://'+your_host+'/api/v1/user_authentication/login?api_token='+api_token, {
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

    frisby.create('Get Routes') 
      .get('http://'+your_host+'/api/v1/user_shift_detail_logs/get_shift_detail?api_token='+api_token+'&auth_token='+json.user.auth_token)
      // .inspectBody()
      .afterJSON(function(json) {
        console.log(json)
      })
      .toss()

    frisby.create('logout the session') 
      .get('http://'+your_host+'/api/v1/user_authentication/logout?api_token='+api_token+'&auth_token='+json.user.auth_token)
      .inspectBody()
      .toss()
    
	})
.toss()