var Zone = require('../models/Zone');

module.exports = {

	find: function(params, callback) {
		Zone.find(params, function(err, zone) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, zone);
		})
	},

	findById: function(id, callback) {
		Zone.findById(id, function(err, zone) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, zone);
		})
	},

	update: function() {
		Zone.findByIdAndUpdate(id, params, {new: true}, function(err, zone) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, zone);
		})
	},

	create: function(params, callback) {
		// var zips = params['zipCodes'];
		// var zip = zips.split(',');
		// var zipArray = zip.map(function(zip) {
		// 	return zip.trim('');
		// })

		// params['zipCodes'] = zipArray;


		Zone.create(params, function(err, zone) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, zone);
		})
	},

	delete: function() {
		Zone.findByIdAndRemove(id, function(err, zone) {
			if(err) {
				callback(err, null);
				return;
			}
			callback(null, zone);
		})
	}
}