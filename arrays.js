const posts = [
  {
    title: "Post 1",
    img: "/images/ciambellone.jpeg",
  },
  {
    title: "Post 2",
    img: "/images/cracker_barbabietola.jpeg",
  },
  {
    title: "Post 3",
    img: "/images/pane_fritto_dolce.jpeg",
  },
  {
    title: "Post 4",
    img: "/images/pasta_barbabietola.jpeg",
  },
  {
    title: "Post 5",
    img: "/images/torta_paesana.jpeg",
  },
];

//per far gestire dalla App, le immagini statiche del nostro server, dobbiamo  uttilizzare un middleware .express.static() STEP 4

export { posts }; //export ES Modules, possibile solo con la destrutturazione.
