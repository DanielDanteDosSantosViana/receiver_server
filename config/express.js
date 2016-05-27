var express         = require('express'),
    methodOverride  = require('method-override'),
    bodyParser      = require('body-parser'),
    app             = express();

var cons = require('consolidate');

    //config methods GET,POST,DELET,PUT
    app.use(methodOverride('X­HTTP­Method'));
    app.use(methodOverride('X­HTTP­Method­Override'));
    app.use(methodOverride('X­Method­Override'));
    app.use(methodOverride('_method'));

    //config BodyParse JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(function (request, response, next) {
      response.header("Access-Control-Allow-Origin", "localhost");
      if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end('');
      } else {
        next();
      }
    });


module.exports = function(){
  return app;
}

