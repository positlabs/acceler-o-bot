var express = require('express');
var router = express.Router();
var RaspiRobot = require("raspirobot").RaspiRobot;
var robot = new RaspiRobot();
robot.setup(); // Set up GPIO ports

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

var ok = function(res){res.send('ok');};

router.get('/spin', function(req, res) {
	console.log('/spin');
	robot.setMotor("left", 1);
	robot.setMotor("right", 1, 1);
	ok(res);
});

router.get('/move', function(req, res) {
	console.log('/move');
	// var vector = req.query.vector;
	robot.setMotor("left", 1); // Turn on the left motor
	robot.setMotor("right", 1, 1); // Turn on the right motor
	ok(res);
});

router.get('/stop', function(req, res){
	console.log('/stop');
	robot.setMotor("left", 0); // Turn on the left motor
	robot.setMotor("right", 0); // Turn on the right motor
	ok(res);
});

module.exports = router;
