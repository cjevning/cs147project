var models = require('../models');

exports.view = function(req, res){
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var lift = user.lifts;
			var lifts = [];
			for (var li in lift) {
				var l = models.Lift.find({"_id": li}).exec(addToArray);
			}
			function addToArray(err, toAdd) {
				if(err) console.log(err);
				if(toAdd[0]) {
					lifts.push(toAdd[0]);
				}
			}
			res.render('lifts', lifts);
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
};