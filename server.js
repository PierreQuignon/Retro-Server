// imports
var express = require('express');

//instancier le serveur
var server = express();

//Configuration des routes
server.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Boujour le server</h1>');
});

//lancement du serveur
server.listen(8080, function() {
  console.log('serveur en écoute');
});
