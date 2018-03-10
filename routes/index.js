var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/createzone', function(req, res, next) {
  res.render('createzone.html', null);
});

router.get('/createcomment', function(req, res, next) {
  res.render('createcomment.html', null);
});

module.exports = router;
