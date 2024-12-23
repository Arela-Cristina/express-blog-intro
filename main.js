console.log("Hello World");

// STEP 1 - Creiamo un server basico ES Modules
import express from "express"; //importare modulo express in main.js

const app = express(); //inizializzamo express. salviamo la istanzia(il server: App), per uttilizzare dei metodi dopo

const port = 666; //assegniamo un numero alla porta principale della nostra app
console.log(port);

import { posts } from "./arrays.js"; //import from arrays.js



//STEP 4 - definiamo la rotta principale ' / '
//diciamo a express di gestire la risposta delle immagini statiche salvate nel nostro server
app.use(express.static("public_assets"));



// STEP 2 - definiamo la rotta principale ' / '
app.get("/", (req, res) => {
  //callback req, res
  console.log("Server del mio blog");
  res.send("Benvenuto al server del inferno");
});

//definiamo la rotta  ' /bacheca '
app.get("/bacheca", (req, res) => {
  //callback req, res
  console.log("La mia bacheca");
  const response = {
    //creiamo un oggetto contenente di (lenght e array di posts)
    length: posts.length, //lenght
    array: posts, //elementi del array
  };

  res.json(response); //restituiamo un json con il nostro oggetto appena creato
});



// STEP 3 = //facciamo ascoltare il server dal client .listen
app.listen(port, () => {
  console.log(`Il server del inferno ascolta http://localhost:${port}`);
});
