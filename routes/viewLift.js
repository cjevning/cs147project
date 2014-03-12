var models = require('../models');

exports.view = function(req, res){
  var username = req.session.username;
  var user = models.User.find({"username": username}).exec(afterQuery);
  count = 0;
  function afterQuery(err, results) {
    if(err) console.log(err);
    if(results[0]) {
      var name = req.params.name;
      var l = models.Lift.find({"name": name}).exec(getLift);
      function getLift(err, list) {
        if(err) console.log(err);
        var lift = list[0];
        res.render('viewLift', { 'name': lift.name, 'mainMuscle': lift.mainMuscle, 'exerciseType': lift.excerciseType,
           'pictureOne': lift.pictureOne, 'pictureTwo': lift.pictureTwo, 'description': lift.description, 'store': false });        
      }
    }
    else {
      req.session.errorMessage = "You must be signed in to do that!";
      res.redirect('/');
    }
  }
};

exports.storeView = function(req, res){
  var username = req.session.username;
  var user = models.User.find({"username": username}).exec(afterQuery);
  count = 0;
  function afterQuery(err, results) {
    if(err) console.log(err);
    if(results[0]) {
      var name = req.params.name;
      var l = models.Lift.find({"name": name}).exec(getLift);
      function getLift(err, list) {
        if(err) console.log(err);
        var lift = list[0];
        res.render('viewLift', { 'name': lift.name, 'mainMuscle': lift.mainMuscle, 'exerciseType': lift.excerciseType,
           'pictureOne': lift.pictureOne, 'pictureTwo': lift.pictureTwo, 'description': lift.description, 'store': true });        
      }
    }
    else {
      req.session.errorMessage = "You must be signed in to do that!";
      res.redirect('/');
    }
  }
};