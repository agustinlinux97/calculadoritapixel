const backgrounds = [
    "img/background1.jpg", "img/background3.jpg", "img/background4.jpg", "img/background5.jpg",
];

let currentBackgroundIndex = 0;

function changeBackground() {
  const backgroundsContainer = document.querySelectorAll("#backgroundsContainer")[0];
  backgroundsContainer.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;

  currentBackgroundIndex++;

  if (currentBackgroundIndex === backgrounds.length) {
    currentBackgroundIndex = 0;
  }
}
  
  setInterval(changeBackground, 5000);
  

let divParaMostrar = document.getElementById('backgroundsContainer');
let divParaOcultar = document.getElementById('loader-container');

function mostrarDiv() {
  divParaMostrar.style.opacity = '1';


}
setTimeout(mostrarDiv, 3000);

function transition() {
  divParaMostrar.style.display = 'grid'
}
setTimeout(transition, 2000)

function ocultarcito() {
  divParaOcultar.style.display = 'none'
}
setTimeout(ocultarcito, 3000)
function opacitate() {
  divParaOcultar.style.opacity = '0';
}
setTimeout(opacitate, 2000)