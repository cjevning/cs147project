var Mongoose = require('mongoose');


var LiftSchema = new Mongoose.Schema({
	"name": String,
	"mainMuscle": String, 
	"excerciseType": String, 
});

var LiftListSchema = new Mongoose.Schema({
	"name": String,
	"lifts": [], 
	"lastDone": Date, 
});

var UserSchema = new Mongoose.Schema({
	"username": String,
	"lifts": [], 
	"liftlists": [], 
	"history": []
});

var HistorySchema = new Mongoose.Schema({
	"liftName": String,
	"date": Date, 
	"reps": String, 
	"weight": String
});

exports.Lift = Mongoose.model('Lift', LiftSchema);
exports.LiftList = Mongoose.model('LiftList', LiftListSchema);
exports.User = Mongoose.model('User', UserSchema);
exports.HistoryLift = Mongoose.model('HistoryLift', HistorySchema);