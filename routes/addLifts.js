var models = require('../models');

exports.view = function(req, res){
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var lift = results[0].lifts;
			console.log("HI - " + lift);
			var lifts = [];
			console.log("test " + lift[0]);
			for (var i = 0; i < lift.length; i++) {
				console.log("ID -"+lift[i]);
				var l = models.Lift.find({"_id": lift[i]}).exec(addToArray);
			}
			function addToArray(err, toAdd) {
				if(err) console.log(err);
				if(toAdd[0]) {
					lifts.push(toAdd[0]);
				}
			}
			res.render('lifts', { 'lifts': lifts });
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
};