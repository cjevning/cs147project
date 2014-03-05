
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models   = require('./models');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_name = 'cs147project';
var local_uri  = 'mongodb://localhost/' + local_name
var database_uri = process.env.MONGOLAB_URI || local_uri
mongoose.connect(database_uri);


// Do the initialization here

// Step 1: load the JSON data
var lifts_json = require('./items.json');
var names_json = require('./names.json');

// Step 2: Remove all existing documents
models.Lift
  .find()
  .remove()
  .exec(onceClear); // callback to continue at



// Step 3: load the data from the JSON file
function onceClear(err) {
  models.LiftName
  .find()
  .remove()
  .exec(onceClear2);
  
}

function onceClear2(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = 2*lifts_json.length;
  for(var i=0; i<lifts_json.length; i++) {
    var json = lifts_json[i];
    var json2 = names_json[i];
    var lift = new models.Lift(json);
    var lift2 = new models.LiftName(json2);

    lift.save(function(err, proj) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      lift2.save(function(err2, proj2) {
        if(err2) console.log(err2);
        to_save_count--;
        console.log(to_save_count + ' left to save');
        if(to_save_count <= 0) {
          console.log('DONE');
          // The script won't terminate until the 
          // connection to the database is closed
          mongoose.connection.close()
        }
      });
     
    
  }
}