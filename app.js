var express = require('express');
var routes = require('./routes');
var http = require('http');
var path  = require('path');

var okr = require('./routes/okr');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')




var connection = require('express-myconnection');
var mysql = require('mysql');

app.set('port', process.env.PORT || 1488);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(path.join(__dirname,'public')));

app.use(
	connection(mysql,{
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: 3306,
		database: 'okrdb'
	}, 'pool')
);

app.get('/', routes.index);
app.get('/okr', okr.list);
app.get('/okr/add', okr.add);
app.post('/okr/add', okr.save);
app.get('/okr/delete:id',okr.delete_okr);
app.get('/okr/edit:id',okr.edit);
app.post('/okr/edit',okr.save_edit);

//app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
	console.log('OKR application is running on localhost:' + app.get('port'));
});

var connection = mysql.createConnection({multipleStatements: true});