exports.view = function(req, res){
  res.render('create', {
  	errorMessage: req.session.errorMessage,
  	showAlt: false
  });
};

exports.viewAlt = function(req, res){
  res.render('create', {
	errorMessage: req.session.errorMessage,
	showAlt: true
  });
};