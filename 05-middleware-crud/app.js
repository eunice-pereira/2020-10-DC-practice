const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const host = 'localhost';
const port = 5001;
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.render('home2');
});

app.get('/:name', (req, res) => {
	const { name } = req.params; // aka "destructuring"
	// const name = req.params.name
	res.render('name', {
		locals: {
			name, // name: name (key and value)
		},
	});
});

server.listen(port, host, () => {
	console.log(`App 2 running on ${host}:${port}.`);
});
