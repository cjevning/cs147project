var models = require('../models');

exports.view = function(req, res){
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);
	var count = 0;
	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var lift = results[0].lifts;
			var lifts = [];
			
			var len = lift.length;
			console.log(len);
			for (var i = 0; i < len; i++) {
				var l = models.Lift.find({"_id": lift[i]}).exec(addToArray);
				function addToArray(err, toAdd) {
					console.log(called);
					if(err) console.log(err);
					if(toAdd[0]) {
						lifts.push(toAdd[0]);
						count += 1;
					}
					else {
						count += 1;
					}
					console.log(count);
				}
				
			}
			while (true) {
				//console.log(count);
				if (count == len-1) break;
			}
			lifts.sort(function(a,b) { return ((a.name  == b.name) ? 0 : ((a.name>b.name) ? 1 : -1 )); } );
			res.render('lifts', { 'lifts': lifts });
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
};