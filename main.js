console.log("Hello World");

//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”

//importare modulo express in main.js
const express = require("express");
// console.log(express); //oggetto

//inizializzamo express. salviamo la istanzia, per uttilizzare dei metodi dopo
const app = express();
// console.log(app); //oggetto

//assegniamo un numero alla porta principale della nostra app
const port = 666;
console.log(port);
