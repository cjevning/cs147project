/*
 * GET home page.
 */

var nodemailer = require("nodemailer");

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
			req.session.page = "orig";
			var type = " sign in ";
			if (req.session.signup) {
				req.session.signup = false;
				type = " sign up ";
			}
			var mailOptions = {
			    from: "test@test.com",
			    to: "cjevning@stanford.edu",
			    subject: "Hello world!",
			    text: "User " + req.session.username + " took " + spent + " milliseconds to"+type+"on the " + req.session.page + " page."
			}
			var transport = nodemailer.createTransport("SMTP", {
			    service: "Gmail",
			    auth: {
			        user: "cs147timer@hotmail.com",
			        pass: "Mongoose"
			    } });
			transport.sendMail(mailOptions, function(error, response){
			    if(error){
			        console.log(error);
			    }else{
			        console.log("Message sent: " + response.message);
			    }});
		}
	}
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: false
  });
};

exports.viewAlt = function(req, res){
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
			req.session.page = "alt";
			var type = " sign in ";
			if (req.session.signup) {
				req.session.signup = false;
				type = " sign up ";
			}
			var mailOptions = {
			    from: "test@test.com",
			    to: "cjevning@stanford.edu",
			    subject: "Hello world!",
			    text: "User " + req.session.username + " took " + spent + " milliseconds to" + type + "on the " + req.session.page + " page."
			}
			var transport = nodemailer.createTransport("SMTP", {
			    service: "Gmail",
			    auth: {
			        user: "cs147timer@hotmail.com",
			        pass: "Mongoose"
			    } });
			transport.sendMail(mailOptions, function(error, response){
			    if(error){
			        console.log(error);
			    }else{
			        console.log("Message sent: " + response.message);
			    }});
		}
	}
  res.render('index', {
	username: req.session.username,
	errorMessage: req.session.errorMessage,
	showAlt: true
  });
};