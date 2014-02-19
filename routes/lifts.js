var lifts = require('../lifts.json');


exports.view = function(req, res){
  res.render('lifts', lifts);
};