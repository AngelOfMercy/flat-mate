const express = require('express');
const crypto = require('crypto');
//const request = require('request');
const path = require('path');
var OAuth = require('oauth-1.0a');
var request = require('request');
require('dotenv').config();

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    i
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

app.get('/api/trademe', (req, res)=>{

    const oauth = OAuth({
      consumer: {
        key: process.env.TRADEME_CLIENT_KEY,
        secret: process.env.TRADEME_CLIENT_SECRET
      },
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return crypto.createHmac('sha1', key).update(base_string).digest('base64');
      }
    });

    // trademe.setToken({
    //   key: process.env.TRADEME_TOKEN,
    //   secret: process.env.TRADEME_SECRET
    // });

    // trademe.get(process.env.TRADEME_URI + '/Search/Property/Rental.json', function(err, response, data){
    //   if(err) console.error(error);

    //   console.log('Code:', response) 

    //   res.json(data);
    // });

    const token = {
      key: process.env.TRADEME_TOKEN,
      secret: process.env.TRADEME_SECRET
    };

    var request_data = {
        url: process.env.TRADEME_URI + '/Search/Property/Rental.json',
        method: 'GET',
        data: 'Content-Type: \'application/json\''           
    }

    

    request({
        url: request_data.url,
        method: request_data.method,
        form: oauth.authorize(request_data, token),
        headers: Object.assign(oauth.toHeader(oauth.authorize(request_data, token)), {'content-type': 'application/json'})
      }, function(error, response, body) {
          if(error) console.error(error);
          //console.log(response);
          res.json(body);
      });
    
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);