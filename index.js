const express = require('express');
const path = require('path');
const test = require('./test-data/data.js');

require('dotenv').config();

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/trademe/flatmate-placeholder', (req, res)=>{


    var data = test.shortflat;
    var output = data.List;

    // for (var index in data.List){
    //   var flat = data.List[index];
    //   console.log(flat);
    //   if(flat.BedRooms && flat.StartPrice){
    //     var pricePerRoom = flat.StartPrice/flat.BedRooms;
    //     console.log(pricePerRoom);
    //     if(pricePerRoom < 200){
    //       flat.pricePerRoom = pricePerRoom;
    //       output.push(flat);
    //     }
    //   }
    // } 
    
    res.json({flats: output});
    
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`${process.env.APP_NAME} is listening on ${port}`);