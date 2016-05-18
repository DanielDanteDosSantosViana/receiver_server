var express = require('express'),
    router = express.Router();

var mongoose = require('../db/mongoose');

//Usuario
var RequestModel = require('../models/RequestModel')(mongoose);
var ReceiverController = require('../controllers/ReceiverController')(RequestModel);

/*
  ROTAS
*/

router.post('/receiver', ReceiverController.insertRequest.bind(ReceiverController));
module.exports = router;
