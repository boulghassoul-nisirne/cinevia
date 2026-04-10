const films = [
  {
    titre: "Increption",
    image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    description: "Film sur les rêves"
  },
  {
    titre: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description: "Voyage dans l'espace"
  },
 
  {
    titre: "Avengers",
    image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description: "Super héros"
  },
  {
    titre: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Histoire d'amour"
  },
  {
    titre: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description: "Histoire d'amour"
  },
  {
    titre: "Avengers",
    image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description: "Super héros Marvel",
    genre: "Action"
  },
  {
    titre: "John Wick",
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description: "Assassin redoutable",
    genre: "Action"
  },
  {
  titre: "FastFurious",
  image:"data:image/jpeg;base64,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",
  description: "Courses et adrénaline",
  genre: "Action"
},
  
  {
    titre: "Mad Max",
    image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    description: "Monde post-apocalyptique",
    genre: "Action"
  },
  {
    titre: "Gladiator",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description: "Guerrier romain",
    genre: "Action"
  },
  {
    titre: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman contre Joker",
    genre: "Action"
  },
  {
    titre: "The Mask",
    image: "https://th.bing.com/th/id/OIP.cFhJZwB6l4OZ4RImDw7ujgHaJ4?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Comédie drôle et folle",
    genre: "Comédie"
  },
  {
    titre: "Mr. Bean",
    image: "images/purepng.com-mr-bean-rowan-atkinsonmr-beanbritish-sitcomtitle-characterco-wrotecurtisgoodnight-mr-beancomedy-showrowan-atkinson-1701528650241qdnlj.png",
    description: "Humour sans paroles",
    genre: "Comédie"
  },
  {
    titre: "Home Alone",
    image: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
    description: "Enfant seul à la maison",
    genre: "Comédie"
  },
  {
    titre: "Superbad",
    image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    description: "Comédie ado",
    genre: "Comédie"
  },
  {
    titre: "The Hangover",
    image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    description: "Soirée incontrôlable",
    genre: "Comédie"
  },
  {
    titre: "Deadpool",
    image: "images/R.jpg",
    description: "Action + humour",
    genre: "Comédie"
  },

 
  {
    titre: "The Conjuring",
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description: "Maison hantée",
    genre: "Horreur"
  },
  {
    titre: "Annabelle",
    image: "images/OIP.jpg",
    description: "Poupée maléfique",
    genre: "Horreur"
  },
  {
    titre: "It",
    image: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    description: "Clown terrifiant",
    genre: "Horreur"
  },
  {
    titre: "Insidious",
    image: "https://image.tmdb.org/t/p/w500/9iQWsXwjOMGDvTDdvCnpiyR0UG3.jpg",
    description: "Esprits maléfiques",
    genre: "Horreur"
  },
  {
    titre: "The Nun",
    image: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    description: "Démon terrifiant",
    genre: "Horreur"
  },
  {
    titre: "Scream",
    image: "https://image.tmdb.org/t/p/w500/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
    description: "Tueur masqué",
    genre: "Horreur"
  },
  {
    titre: "The Conjuring",
    image: "images/8c40e2e1933163be44c6652a7d8a1bb67822385d84e4caf3750da580c981e2db.jpg",
    description: "Tueur psychopathe",
    genre: "Horreur"
  },
  {
    titre: "The Exorcist",
    image: "https://image.tmdb.org/t/p/w500/5x0CeVHJI8tcDx8tUUwYHQSNILq.jpg",
    description: "Possession démoniaque",
    genre: "Horreur"
  }
];

// 2. Récupérer le container
const container = document.getElementById("films-container");

// 3. Fonction création carte
function createCard(film) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = film.image;

  const title = document.createElement("h3");
  title.textContent = film.titre;

  const btn = document.createElement("button");
  btn.textContent = "Voir détails";
  btn.classList.add("btn");

  // ajouter éléments
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(btn);

  return card;
}

// 4. Affichage films
function displayFilms() {
  films.forEach(film => {
    const card = createCard(film);
    container.appendChild(card);
  });
}

// 5. Lancer affichage
displayFilms();