let Alturapersona: number = document.getElementById("Alturapermitida");
const alturapermitida: number = 130;
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (alturapermitida.value > Alturapersona) {
    console.log("La persona puede subir al juego");
  } else {
    console.log("La persona no puede subir al juego");
  }
});
