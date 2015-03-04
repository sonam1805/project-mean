var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://sonam:Sonam@1805@ds061548.mongolab.com:61548/meetups');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile('client/views/index.html');
});

app.use('/js', express.static('client/js'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(process.env.PORT || 5000);
console.log("Server running on port no. 5000");
)