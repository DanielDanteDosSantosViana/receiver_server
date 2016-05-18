'use strict';
function RequestDAO(model) {
  this.model = model;
}
RequestDAO.prototype.create = function(data, callback) {
  var model = new this.model(data);
  model.save(function(err, result) {
    callback(err, result);
  });
};
RequestDAO.prototype.find = function(query, callback) {
  this.model.find(query).exec(callback);
};

RequestDAO.prototype.findOne = function(_email,_senha, callback) {
  var query = {email : _email, senha: _senha };
  this.model.findOne(query).exec(function(err, result) {
    callback(err, result);
  });
};

RequestDAO.prototype.findById = function(id, callback) {
  var query = { _id : id };
  this.model.findOne(query).exec(callback);
};


RequestDAO.prototype.update = function(_id, data, callback) {
  var query = { _id : _id };
  this.model.update(query, data).exec(function(err, result) {
    callback(err, result);
  });
};

RequestDAO.prototype.remove = function(_id, callback) {
  var query = { _id : _id };
  this.model.remove(query).exec(function(err, result) {
    callback(err, result);
  });
};

module.exports = function(mongoose) {
  var Request = mongoose.model('Request', {
        hora : String,
        dataInsert : { type: Date, default: Date.now },
        dia : String,
        ipSrc : String,
        ipDest : String,
        method : String,
        url : String,
        length : Number,
        token : String,

  });
  return new RequestDAO(Request);
};
