var debug = require('debug')('receiver_server:controller');
var config = require('../config/default');
var Promise = require('bluebird');

var handleNotFound = function(data) {
  if(!data) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};

function ReceiverController(RequestModel) {
  this.model = Promise.promisifyAll(RequestModel);
}

ReceiverController.prototype.insertRequest = function(request, response, next) {
  var requestData = request.body.requestData;
  this.model.createAsync(requestData)
    .then(function(err, data) {
      if(!err){
        response.json({resposta:err});
      }else{
        response.json({resposta:"OK"})

      }
    })
    .catch(next);
};


module.exports = function(RequestModel) {
  return new ReceiverController(RequestModel);
};
