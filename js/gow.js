let cards = document.querySelectorAll("[data-column-item]");

let images = ['https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-01-en-08sep21?$1600px$', 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-12-en-08sep21?$1600px$', 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-08-en-08sep21?$1600px$'];

let imageIndices = [0, 1, 2]; // Orden deseado de las imágenes

if(cards !== null) {
  for (i = 0; i < cards.length; i++) {
    let card = cards[i];
    
    let index = imageIndices[i % imageIndices.length]; // Cicla a través de los índices de las imágenes
    let image = images[index];
    
    card.style.backgroundImage = "url('" + image + "')";
    
  } 
 
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("column--active");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" column--active", "");
      }
      this.className += " column--active";
    });
  }
}


 
 
    