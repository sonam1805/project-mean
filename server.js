var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-db');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile('client/views/index.html');
});

app.use('/js', express.static('client/js'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})