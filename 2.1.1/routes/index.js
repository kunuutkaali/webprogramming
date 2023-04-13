var express = require('express');
var router = express.Router();
const words = require('../models/word');

/* GET home page. */
router.get('/', function(req, res, next) {
  const today = new Date();
  const dayIndex = today.getDay();
  res.send(words[dayIndex]);
});

module.exports = router;
