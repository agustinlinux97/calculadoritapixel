const backgrounds = [
    "img/background1.jpg",
    "img/background3.jpg",
    "img/background4.jpg",
    "img/background5.jpg",
    // Agregar aquí todas las imágenes que se quieran usar como fondo
  ];
  
  let currentBackgroundIndex = 0;
  
  function changeBackground() {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
  
    currentBackgroundIndex++;
  
    if (currentBackgroundIndex === backgrounds.length) {
      currentBackgroundIndex = 0;
    }
  }
  
  setInterval(changeBackground, 5000); // Cambiar cada 5 segundos (5000 milisegundos)
  