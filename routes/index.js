/*
 * GET home page.
 */

var nodemailer = require("nodemailer");

exports.view = function(req, res){
	console.log("=============================================================ORIGINAL+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
	if (!req.session.username) {
		req.session.page = "original";
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
			var type = " sign IN ";
			if (req.session.signup) {
				req.session.signup = false;
				type = " sign UP ";
			}
			console.log(req.session.page);
			var mailOptions = {
			    from: "test@test.com",
			    to: "cjevning@stanford.edu, juliag1@stanford.edu, buhler@stanford.edu",
			    subject: "Hello world!",
			    text: "User " + req.session.username + " took " + spent + " milliseconds to"+type+"on the " + req.session.page + " page."
			}
			var transport = nodemailer.createTransport("SMTP", {
			    service: "Gmail",
			    auth: {
			        user: "cjevning@gmail.com",
			        pass: "hz9k1234"
			    } });
			
		}
	}
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: false
  });
};

exports.viewAlt = function(req, res){
	console.log("=============================================================ALTERNATE+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
	if (!req.session.username) {
		req.session.page = "alternate";
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
			var type = " sign IN ";
			if (req.session.signup) {
				req.session.signup = false;
				type = " sign UP ";
			}
			console.log(req.session.page);
			var mailOptions = {
			    from: "test@test.com",
			    to: "cjevning@stanford.edu, juliag1@stanford.edu, buhler@stanford.edu",
			    subject: "Hello world!",
			    text: "User " + req.session.username + " took " + spent + " milliseconds to" + type + "on the " + req.session.page + " page."
			}
			var transport = nodemailer.createTransport("SMTP", {
			    service: "Gmail",
			    auth: {
			        user: "cjevning@gmail.com",
			        pass: "hz9k1234"
			    } });
			
		}
	}
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: true
  });
};