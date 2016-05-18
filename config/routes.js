
module.exports = function(app){


app.get('/',function(req,res){

  res.render('index')
});

// route movie
app.use('/receiver_server', require('../routes/receiver'));

};
