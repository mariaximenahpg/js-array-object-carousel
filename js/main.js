// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso l'alto o il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const displayed = document.querySelector(".displayed");
const preview = document.querySelector(".preview");


for (let i = 0; i < images.length; i++) {
    const photo = document.createElement("img");
  photo.src = `${images[i].image}`;
  photo.classList.add("displayed-image");

  const photoInfo = document.createElement("div");
  photoInfo.classList.add("photo-info");

  const photoTitle = document.createElement("h2");
  photoTitle.innerHTML = images[i].title;

  const photoText = document.createElement("p");
  photoText.innerHTML = images[i].text;
  displayed.append(photoInfo);
  photoInfo.append(photoTitle);
  photoInfo.append(photoText);

  if (i === 0) {
    photo.classList.add("active");
    photoInfo.classList.add("active");
  }
  displayed.append(photo);

  const photoPreview = document.createElement("img");
  photoPreview.src = `${images[i].image}`;
  photoPreview.classList.add("preview-image");
  if (i === 0) {
    photoPreview.classList.add("active");
  }
  preview.append(photoPreview);
}


const photoDisplayed = document.querySelectorAll(".displayed-image");
const previews = document.querySelectorAll(".preview-image");
const resume = document.querySelectorAll(".photo-info");
const btnUp = document.getElementById("up")
const btnDown = document.getElementById("down")

let index = 0;
btnUp.addEventListener('click',function(){
    photoDisplayed[index].classList.remove("active");
    previews[index].classList.remove("active");
    resume[index].classList.remove("active");

    if (index === 0){
        index = photoDisplayed.length;
    }
    index--;

    photoDisplayed[index].classList.add("active");
    previews[index].classList.add("active");
    resume[index].classList.add("active");
});

btnDown.addEventListener("click", function () {
    photoDisplayed[index].classList.remove("active");
    previews[index].classList.remove("active");
    resume[index].classList.remove("active");
  
    index++;
    if (index === photoDisplayed.length) {
      index = 0;
    }
  
    photoDisplayed[index].classList.add("active");
    previews[index].classList.add("active");
    resume[index].classList.add("active");
});
