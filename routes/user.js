var models = require('../models');

exports.login = function(req, res) {
 	var username = req.query.username;
 	req.session.errorMessage = null;
	models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			req.session.username = username;

			  // send them back to the homepage
			  res.redirect('/');
		}
		else {
			req.session.errorMessage = "That user doesn't exist! If you'd like, you can create an account below.";
			res.redirect('/');
		}
	}
}

exports.logout = function(req, res) {
  req.session.username = null;
  req.session.errorMessage = null;
  res.redirect('/');
}

exports.create = function(req, res) {
	var username = req.query.username;
	req.session.errorMessage = null;
	models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			req.session.errorMessage = "That username is already in use!"
			res.redirect('create');
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