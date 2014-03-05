exports.view = function(req, res){
	req.session.signup = true;
  res.render('create', {
  	errorMessage: req.session.errorMessage,
  	showAlt: false
  });
};

exports.viewAlt = function(req, res){
	req.session.signup = true;
  res.render('create', {
	errorMessage: req.session.errorMessage,
	showAlt: true
  });
};