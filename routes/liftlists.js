var models = require('../models');

exports.view = function(req, res){
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);
	count = 0;
	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var list = results[0].liftlists;
			var lists = [];
			var len = list.length;
			if (len == 0) res.render('liftlists', { 'lists': lists });
			for (var i = 0; i < len; i++) {
				var l = models.LiftList.find({"_id": list[i]}).exec(addToArray);
				function addToArray(err, toAdd) {
					if(err) console.log(err);
					if(toAdd[0]) lists.push(toAdd[0]);
					count += 1;
					showPage(count);
					function showPage(c) {
						if (c == len) {
							lists.sort(function(a,b) { return ((a.name  == b.name) ? 0 : ((a.name>b.name) ? 1 : -1 )); } );
							res.render('liftlists', { 'lists': lists });
						}
					}
				}
			}
			
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
};

exports.create = function(req, res) {
	var username = req.session.username;
	var name = req.params.name;
	var user = models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var newList = new models.LiftList({
			    "name": name,
			    "lifts": [],
			    "lastDone": new Date('Jan 24, 1992')
			  });
			  newList.save(afterSave);
			  function afterSave(err, resu) {
			    if(err) console.log(err);
			    var newest = models.LiftList.find({"_id": newList._id}).exec(red);

			    function red(err, list) {
				    if(err) console.log(err);
				    var id = list[0]._id;
				    results[0].liftlists.push(list[0]._id);
				    results[0].save(afterS);

				    function afterS (err, t) {
				    	if(err) console.log(err);
				    	res.redirect('addLifts/' + list[0]._id);
				    }
				}
			}
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
}

exports.addTo = function(req, res) {
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var list = req.params.listID;
			var lift = req.params.liftID;
			var li = models.LiftList.find({'_id': list}).exec(afterQuery);
			function afterQuery(err, u) {
				if(err) console.log(err);

			    u[0].lifts.push(lift);
			    u[0].save(afterSave);
			    function afterSave(err, projects) {
			      if(err) console.log(err);
			      res.send();
			    }
			} 
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
}

exports.deleteFrom = function(req, res) {
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var list = req.params.listID;
			var lift = req.params.liftID;
			var li = models.LiftList.find({'_id': list}).exec(afterQuery);
			function afterQuery(err, u) {
				if(err) console.log(err);
				console.log(u[0].lifts);
				u[0].lifts.remove(lift, 1);
			    u[0].save(afterSave);
			    console.log(u[0].lifts);
			    function afterSave(err, projects) {
			      if(err) console.log(err);
			      res.send();
			    }
			} 
		}
		else {
			req.session.errorMessage = "You must be signed in to do that!";
			res.redirect('/');
		}
	}
}