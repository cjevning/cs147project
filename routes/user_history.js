var models = require('../models');

exports.view = function(req, res){
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);
	count = 0;
	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var hist = results[0].history;
			var hists = [];
			var len = hist.length;
			if (len == 0) res.render('user_history', { 'hists': hists });
			for (var i = 0; i < len; i++) {
				var l = models.HistoryLift.find({"_id": hist[i]}).exec(addToArray);
				function addToArray(err, toAdd) {
					if(err) console.log(err);
					if(toAdd[0]) hists.push(toAdd[0]);
					count += 1;
                    showPage(count);
                    function showPage(c) {
                    	if (c == len) {
                    		hists.sort(function(a,b) { return ((a.date  == b.date) ? 0 : ((a.date>b.date) ? -1 : 1 )); } );
							res.render('user_history', { 'hists': hists });
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

exports.addTo = function(req, res) {
	var username = req.session.username;
	var user = models.User.find({"username": username}).exec(afterQuery);

	function afterQuery(err, results) {
		if(err) console.log(err);
		if(results[0]) {
			var now = new Date();
        	now.setHours( now.getHours() - 8 );
        	var name = req.params.name;
			var repsPS = req.params.reps;
			var weightPS = req.params.weight;
			var reps = repsPS.split("_");
			var weight = weightPS.split("_");
			var repA = new Array();
			var weightA = new Array();
			for (var i = 0; i < reps.length; i++){
				repA.push(reps[i]);
				weightA.push(weight[i]);
			}
			var liftID = req.params.id;
			if (liftID != "get") {
				var newHist = new models.HistoryLift({
				    "liftID": liftID,
				    "liftName": name,
				    "date": now,
				    "reps": repA,
				    "weight": weightA
				});
				newHist.save(afterSave);
				  function afterSave(err, resu) {
				    if(err) console.log(err);
				    var newest = models.HistoryLift.find({"liftID": liftID, "date": now}).exec(red);
				    
				    function red(err, list) {
					    if(err) console.log(err);
					    console.log(list[0]);
					    var id = list[0]._id;
					    results[0].history.push(list[0]._id);
					    results[0].save(afterS);

					    function afterS (err, t) {
					    	if(err) console.log(err);
					    	res.send();
					    }
					}
				}
			}
			else {
				var l = models.Lift.find({"name": name}).exec(liftFound);
				function liftFound(err, r) {
					if (err) console.log(err);
					liftID = r[0]._id;
					var newHist = new models.HistoryLift({
				    "liftID": liftID,
				    "liftName": name,
				    "date": now,
				    "reps": repA,
				    "weight": weightA
					});
					newHist.save(afterSave);
					  function afterSave(err, resu) {
					    if(err) console.log(err);
					    var newest = models.HistoryLift.find({"liftID": liftID, "date": now}).exec(red);
					    
					    function red(err, list) {
						    if(err) console.log(err);
						    console.log(list[0]);
						    var id = list[0]._id;
						    results[0].history.push(list[0]._id);
						    results[0].save(afterS);

						    function afterS (err, t) {
						    	if(err) console.log(err);
						    	res.send();
						    }
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