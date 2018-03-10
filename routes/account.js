var express = require('express');
var router = express.Router();
var ProfileController = require('../controllers/ProfileController');
var bcrypt = require('bcrypt');

router.get('/:action', function(req, res, next) {
	const action = req.params.action;



	if(action == 'logout') {
		req.session.reset();
		res.json({
			confirmation: 'success',
			message: 'Please log in again'
		})
		return;
	}

	if(action == 'currentuser') {
		console.log('current user log');
		if(req.session == null) {
			res.json({
				confirmation: 'fail',
				message: 'User not logged in'
			})
			return;		
		}

		if(req.session.user == null) {
			res.json({
				confirmation: 'fail',
				message: 'User not logged in'
			})
			return;		
		}

		ProfileController.findById(req.session.user, function(err, result) {
			if(err) {
				res.json({
					confirmation: 'fail',
					message: err
				})
				return;		
			}
			res.json({
				confirmation: 'success',
				user: result
			})
		})
	}
})

router.post('/:action', function(req, res, next) {
	const action = req.params.action;

	if(action == 'register') {
		console.log('here123: ');
		ProfileController.create(req.body, function(err, result) {
			console.log('req.body: ' + req.body);
			if(err) {
				res.json({
					confirmation: 'fail',
					message: 'failed to create'
				})
				return;
			}
			req.session.user = result._id;
			res.json({
				confirmation: 'success',
				user: result
			})
		})
		return;
	}
	if(action == 'login') {
		console.log('login log');
		ProfileController.find({username: req.body.username}, function(err, results) {
			console.log('main');	
			if(err) {
				console.log('here');
				res.json({
					confirmation: 'fail',
					message: err.message
				})
				return;
			}
			if(results.length == 0) {
				console.log('here1');
				res.json({
					confirmation: 'fail',
					message: 'Wrong username'
				})
				return;
			}
			let profile = results[0];
			let isPasswordCorrect = bcrypt.compareSync(req.body.password, profile.password);
			if(isPasswordCorrect == false) {
				res.json({
					confirmation: 'fail',
					message: 'Wrong password'
				})
				return;
			}

			req.session.user = profile._id
			res.json({
				confirmation: 'success',
				user: profile
			})
		})
	}
})

router.post('/:action', function(req, res, next) {
	console.log('sign up got here');
	var action = req.params.action;
	if(action == 'signup') {
		res.json({
			confirmation: 'success',
			action: action
		})
	}
})


module.exports = router;