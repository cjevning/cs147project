/*
 * GET home page.
 */

exports.view = function(req, res){
	if (!req.session.username) {
		if (!req.session.startTime) {
			req.session.startTime = new Date().getTime();
			req.session.timeSpent = null;
		}
	}
	else {
		if (req.session.startTime) {
			var now = new Date().getTime();
			var spent = now - req.session.startTime;
			req.session.startTime = null;
			req.session.timeSpent = spent;
		}
	}
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: false
  });
};

exports.viewAlt = function(req, res){
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: true
  });
};