var Profile = require('../models/Profile');
var bcrypt = require('bcrypt');

module.exports = {

	find: function(params, callback) {
		Profile.find(params, function(err, profile) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, profile);
		})
	},

	findById: function(id, callback) {
		Profile.findById(id, function(err, profile) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, profile);
		})
	},

	update: function() {
		Profile.findByIdAndUpdate(id, params, {new: true}, function(err, profile) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, profile);
		})
	},

	create: function(params, callback) {
		params['password'] = bcrypt.hashSync(params.password, 10);
		console.log('params: ', params)
		Profile.create(params, function(err, profile) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, profile);
		})
	},

	delete: function() {
		Profile.findByIdAndRemove(id, function(err, profile) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, profile);
		})
	}
}