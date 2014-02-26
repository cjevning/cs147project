var models = require('../models');

exports.view = function(req, res){
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);
	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var lift = results[0].lifts;
			var lifts = [];
			for (var i = 0; i < lift.length; i++) {
				var l = models.Lift.find({"_id": lift[i]}).exec(addToArray);
			}
			function addToArray(err, toAdd) {
				if(err) console.log(err);
				if(toAdd[0]) {
					lifts.push(toAdd[0]);
					lifts.sort(function(a,b) { return ((a.name  == b.name) ? 0 : ((a.name>b.name) ? 1 : -1 )); } );
				}
			}
			res.render('addLifts', { 'lifts': lifts });
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
};