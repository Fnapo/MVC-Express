var express = require('express');
var router = express.Router();
let modelo = require('../public/javascripts/modelo');

router.get('/', function(req, res, next) {
    res.json(modelo);
});

module.exports = router;