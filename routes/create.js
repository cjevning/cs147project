exports.view = function(req, res){
  res.render('create', {
  	errorMessage: req.session.errorMessage
  });
};