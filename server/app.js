var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var index = require('./routes/index');
var jokes = require('./routes/jokes');

app.use(bodyParser.urlencoded({ extended: true }));

//routers
app.use('/jokes', jokes);

//Static Files
app.use('/', index);

// Set port to listen on
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server is listening on port ' + app.get('port'));
});
