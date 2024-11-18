console.log("Hello World");

//Creiamo un server basico

const express = require("express"); //importare modulo express in main.js
// console.log(express); //oggetto

const app = express(); //inizializzamo express. salviamo la istanzia(il server: App), per uttilizzare dei metodi dopo
// console.log(app); //oggetto

const port = 666; //assegniamo un numero alla porta principale della nostra app
console.log(port);

//definiamo la rotta principale ' / '
app.get("/", (req, res) => {
  //callback req, res
  console.log("Server del mio blog");
  res.send("Benvenuto al server del inferno"); //proprieta .send per inviare una  risposta al client
});

//facciamo ascoltare il server dal client .listen
app.listen(port, () => {
  console.log(`Il server del inferno ascolta http://localhost:${port}`);
});
