
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  "id": String,
  "lift": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


