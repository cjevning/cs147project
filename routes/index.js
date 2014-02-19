/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
	username: req.session.username
  });
};
