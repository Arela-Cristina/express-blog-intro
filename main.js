console.log("Hello World");

//Creiamo un server basico

const express = require("express"); //importare modulo express in main.js
// console.log(express); //oggetto

const app = express(); //inizializzamo express. salviamo la istanzia, per uttilizzare dei metodi dopo
// console.log(app); //oggetto

const port = 666; //assegniamo un numero alla porta principale della nostra app
console.log(port);

//definiamo la rotta principale ' / '
app.get("/", (req, res) => {
  console.log("Server del mio blog");
  res.send("Benvenuto al server del inferno");
});
