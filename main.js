const URL = "https://api.giphy.com/v1/gifs/";
const API_URL = "cScdBpngJp7REI49niSfv3yrpL3lg6xq";

let search = document.querySelector("#search");
let random = document.querySelector("#random");
let trending = document.querySelector("#trending");
let cardGroup = document.querySelector("#contenedor");

let gifs = [];

const buscar = (e) => {
  e.preventDefault();

  while (cardGroup.firstChild) {
    cardGroup.removeChild(cardGroup.firstChild);
  }

  let busqueda = document.querySelector("#input").value;

  fetch(`${URL}search?api_key=${API_URL}&q=${busqueda}&limit=9`)
    .then((response) => response.json())
    .then((res) => {
      gifs = res.data;

      gifs.forEach((element) => {

        
        let divCol = document.createElement("div");
        divCol.classList.add("col");
        cardGroup.appendChild(divCol);

        let div = document.createElement("div");
        div.classList.add("card" , "h-100");
        divCol.appendChild(div);

        let img = document.createElement("img");
        img.setAttribute("src", element.images.downsized_medium.url);
        img.setAttribute("alt" , element.title);
        img.classList.add("card-img-top");
        div.appendChild(img);

      });
    });
};

const trendingGif = (e) => {
    e.preventDefault();

    while (cardGroup.firstChild) {
      cardGroup.removeChild(cardGroup.firstChild);
    }
  
  
    fetch(`${URL}trending?api_key=${API_URL}&limit=9`)
      .then((response) => response.json())
      .then((res) => {
        gifs = res.data;

  
          
          gifs.forEach((element) => {

            console.log(element);
            let divCol = document.createElement("div");
            divCol.classList.add("col");
            cardGroup.appendChild(divCol);
    
            let div = document.createElement("div");
            div.classList.add("card" , "h-100");
            divCol.appendChild(div);
    
            let img = document.createElement("img");
            img.setAttribute("src", element.images.downsized_medium.url);
            img.setAttribute("alt" , element.title);
            img.classList.add("card-img-top");
            div.appendChild(img);
    
          });

      });
}

search.addEventListener("click", buscar);
trending.addEventListener("click", trendingGif);
