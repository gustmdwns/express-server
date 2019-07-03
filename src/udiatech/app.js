const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/company1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'company1.html'));
});

app.get('/company2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'company2.html'));
});

app.get('/company3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'company3.html'));
});

app.get('/business1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'business1.html'));
});

app.get('/product1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'product1.html'));
});

app.get('/gallery1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'gallery1.html'));
});

app.get('/gallery2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'gallery2.html'));
});

app.get('/notice', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'notice.html'));
});

app.use(express.static(__dirname + '/public'));

module.exports = app;