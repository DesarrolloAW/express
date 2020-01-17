var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});
router.get('/usuarios', function(req, res, next) {
  res.json({users: [{name: 'Christian Guerrero'}]});
});
module.exports = router;
