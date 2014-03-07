/*
 * GET home page.
 */

var nodemailer = require("nodemailer");

exports.view = function(req, res){
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: true
  });
};

exports.viewAlt = function(req, res){	
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: true
  });
};