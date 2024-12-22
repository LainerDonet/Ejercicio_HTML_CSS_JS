const tituloCancion = document.querySelector(".reproductor-musica h1");
const nombreArtista = document.querySelector(".reproductor-musica p");

const progreso = document.getElementById("progress");
const cancion = document.getElementById("cancion");

const iconoControl = document.getElementById("iconoControler");
const botonRePa = document.querySelector(".controles button.boton-reproducir-pausar");

const botonAtras = document.querySelector(".controles button.atras");
const botonAdelante = document.querySelector(".controles button.adelante");

const canciones = [
    {
        titulo: "Alibi",
        nombre: "Sevdaliza ft Pablo Vittar Yseult",
        fuente: "music/Alibi Sevdaliza ft Pablo Vittar Yseult.mp3"
    },
    {
        titulo: "We can't be friends",
        nombre: "Adriana Grande",
        fuente: "music/Ariana Grande We can't be friends.mp3"
    },
    {
        titulo: "Bennie and the Jets",
        nombre: "Elton John",
        fuente: "music/Elton John - Bennie and the Jets.mp3"
    },
    {
        titulo: "Flaca",
        nombre: "Andrés Calamaro",
        fuente: "music/Flaca - Andrés Calamaro.mp3"
    },
    {
        titulo: "Totaila",
        nombre: "Bebeshito",
        fuente: "music/Totaila (Prod. by Ernesto Losa).mp3"
    },
];
let indiceCancionActual =  0; 

function actualizarInfoCancion() {
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener("loadeddata", function () {});
}

cancion.addEventListener("loadedmetadata", ()=>{
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
})

botonRePa.addEventListener("click", reproducirPausar);

function reproducirPausar() {
    if (cancion.paused) {
        reproducirCancion();
       
    } else {
        pausarCancion();
        
    }
}

function reproducirCancion() {
    cancion.play();
     iconoControl.classList.add("bi-pause-fill");
    iconoControl.classList.remove("bi-play-fill");

}

function pausarCancion() {
    cancion.pause();
    iconoControl.classList.add("bi-play-fill");
    iconoControl.classList.remove("bi-pause-fill");
}

cancion.addEventListener("timeupdate", function () {
    if (!cancion.paused) {
        progreso.value = cancion.currentTime;
    }
})
progreso.addEventListener("input", function () {
    cancion.currentTime = progreso.value;
})
botonAdelante.addEventListener("click", ()=>{
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
})
botonAtras.addEventListener("click", ()=>{
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
})
actualizarInfoCancion();