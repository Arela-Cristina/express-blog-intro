console.log("Hello World");

// STEP 1
//Creiamo un server basico ES Modules
import express from "express"; //importare modulo express in main.js
// console.log(express); //oggetto

const app = express(); //inizializzamo express. salviamo la istanzia(il server: App), per uttilizzare dei metodi dopo
// console.log(app); //oggetto

const port = 666; //assegniamo un numero alla porta principale della nostra app
console.log(port);

//import from arrays.js
import { posts } from "./arrays.js";

//STEP 4
//diciamo a express di gestire la risposta delle immagini statiche salvate nel nostro server
app.use("/images", express.static("public,images"));

// STEP 2
//definiamo la rotta principale ' / '
app.get("/", (req, res) => {
  //callback req, res
  console.log("Server del mio blog");
  res.send("Benvenuto al server del inferno"); //proprieta .send per inviare una  risposta al client
});

//definiamo la rotta  ' /bacheca '
app.get("/bacheca", (req, res) => {
  //callback req, res
  console.log("La mia bacheca");
  res.send("Questa sarebbe la mia bacheca");
});

// STEP 3
//facciamo ascoltare il server dal client .listen
app.listen(port, () => {
  console.log(`Il server del inferno ascolta http://localhost:${port}`);
});
