'use strict';
function RequestDAO(model) {
  this.model = model;
}
RequestDAO.prototype.create = function(data,token, callback) {
  for (var i = 0 ; i < data.length ; i++){
      data[i].token = token;
  }
  var model = new this.model(data[i]);
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
  var Pacote = new mongoose.Schema([{
          hora : String,
          dataInsert : { type: Date, default: Date.now },
          dia : String,
          ipSrc : String,
          ipDest : String,
          method : String,
          url : {s:String,origin:String,length:Number},
          length : Number,
          token : String,
    }]);

  var Request = mongoose.model('Request',Pacote);




  return new RequestDAO(Request);
};
