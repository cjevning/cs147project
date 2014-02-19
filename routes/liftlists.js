var lists = require('../lists.json');


exports.view = function(req, res){
  res.render('liftlists', lists);
};