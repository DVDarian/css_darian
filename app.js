var express = require('express'); // Библиотека сервера
var path = require('path'); // Парсинг путей
var request = require('request'); // Парсинг обращений на сарвер
var bodyParser = require('body-parser'); //Парсинг обращений чарез headers

var app = express(); // Передача переменной объекта сервера express

app.use(bodyParser.urlencoded({ // Конфигурация парсинга хедерсов
    extended: true
}));

app.use(bodyParser.json()); // Парсинг формата

app.use('/bower_components',  express.static(path.join(__dirname, "bower_components")));

app.use(express.static(path.join(__dirname, "public"))); // По запросу / обрабатывать index.html из папки public

var public_dir = './public/';

app.get('/page1', function(req, res) {
    res.sendfile(public_dir + 'page1.htm');
});

app.get('/selector', function(req, res) {
    res.sendfile(public_dir + 'selector.htm');
});

app.get('/properties', function(req, res) {
    res.sendfile(public_dir + 'properties.htm');
});

app.get('/comments', function(req, res) {
    res.sendfile(public_dir + 'comments.html');
});

app.get('/rel_href', function(req, res) {
    res.sendfile(public_dir + 'rel_href.htm');
});

app.get('/tags', function(req, res) {
    res.sendfile(public_dir + 'tags.html');
});

app.listen(3002, function(){ // Запуск бесконечной функции сервера
    console.log('Express server listening on port 3002');
});


