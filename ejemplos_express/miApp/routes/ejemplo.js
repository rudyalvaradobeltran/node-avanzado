var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ejemplo');
});

router.get('/interno', function(req, res, next) {
  res.send('interno');
});

module.exports = router;