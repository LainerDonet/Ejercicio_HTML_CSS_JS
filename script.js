// Seleccionar los elementos del DOM
const input = document.getElementById('miInput'); // input
const boton = document.getElementById('miBoton'); // boton
const resultado = document.getElementById('resultado'); //campo de text

// Agregar evento click al botón
boton.addEventListener('click', () => {
  // Capturar el valor del input
  const texto = input.value;

  // Mostrar el texto capturado (o hacer algo con él)
  resultado.textContent = `Texto capturado: ${texto}`;
  
  // También puedes usar la variable `texto` en otro lugar
  console.log(texto);
});
