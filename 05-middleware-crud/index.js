const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const host = 'localhost';
const port = 5000;
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/lift-off', (req, res) => {
	res.render('anchor');
});

server.listen(port, host, () => {
	console.log(`App 1 running on ${host}:${port}.`);
});
