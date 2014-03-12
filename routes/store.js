var models = require('../models');

exports.view = function(req, res){
  var username = req.session.username;
  var user = models.User.find({"username": username}).exec(afterQuery);

  function afterQuery(err, results) {
    if(err) console.log(err);
    if(results[0]) {
      var l = models.LiftName.find().sort('name').exec(addToArray);
      var lifts = new Array();
      function addToArray(err, toAdd) {
        console.log(toAdd[0]);
        if(err) console.log(err);
        res.render('store', { 'lifts': toAdd });
      }
    }
    else {
      req.session.errorMessage = "You must be signed in to do that!";
      res.redirect('/');
    }
  }
};

exports.addLift = function(req, res) {
  var username = req.session.username;
  var id = req.params.id;
  var user = models.User.find({"username": username}).exec(afterQuery);
  function afterQuery(err, u) {
    if(err) console.log(err);
    u[0].lifts.push(id);
    u[0].save(afterSave);
    function afterSave(err, projects) {
      if(err) console.log(err);
      res.send();
    }
  } 
}

exports.addLift2 = function(req, res) {
  var username = req.session.username;
  var liftName = req.params.name;
  var user = models.User.find({"username": username}).exec(afterQuery);
  function afterQuery(err, u) {
    if(err) console.log(err);
    var t = models.LiftName.find({"name": liftName}).exec(aq2);
    function aq2(err, v) {
      if(err) console.log(err);
      var id = v[0]._id;
      u[0].lifts.push(id);
      u[0].save(afterSave);
      function afterSave(err, projects) {
        if(err) console.log(err);
        res.send();
      }
    }
  } 
}