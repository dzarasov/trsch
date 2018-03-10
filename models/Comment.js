var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	username: {type: String, default: ''},
	zone: {type: String, default: ''},
	body: {type: String, default: ''},
	name: {type: String, default: ''},
	address: {type: String, default: ''},
	phone: {type: String, default: ''},
	website: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('CommentSchema', CommentSchema);