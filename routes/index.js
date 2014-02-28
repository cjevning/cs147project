/*
 * GET home page.
 */

exports.view = function(req, res){
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