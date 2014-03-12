var models = require('../models');

exports.login = function(req, res) {
 	var username = req.query.username;
 	req.session.nonErrorMessage = null;
 	req.session.takenErrorMessage = null;
	models.User.find({"username": username}).exec(afterQuery);
	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			req.session.username = username;
			  // send them back to the homepage
			  res.redirect('/');
		}
		else {
			req.session.nonErrorMessage = "NonExist";
			res.render('index', {"nonErrorMessage": "nonExist", "showAlt": true});
		}
	}
}

exports.logout = function(req, res) {
  req.session.username = null;
  req.session.nonErrorMessage = null;
  req.session.takenErrorMessage = null;
  res.redirect('/');
}

exports.create = function(req, res) {
	var username = req.query.username;
	req.session.nonErrorMessage = null;
  	req.session.takenErrorMessage = null;
	models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			req.session.takenErrorMessage = "Taken"
			res.render('create', {"takenErrorMessage": "taken", "showAlt": true});
		}
		else {
			var newUser = new models.User({
    			"username": username,
    			"lifts": [],
    			"liftlists": [],
    			"history": []
  		});
  		newUser.save(afterSave);

  		function afterSave(err, projects) {
    		if(err) console.log(err);
    			req.session.username = req.query.username;
 				res.redirect('/');
  			}
		}
	}
}