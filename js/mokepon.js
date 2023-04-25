let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("mascota")
    sectionSeleccionarMascota.style.display = "none"


    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputhipodoge = document.getElementById("hipodoge")
    let inputcapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")
    let inputlangostelvis = document.getElementById("langostelvis")
    let inputtucapalma = document.getElementById("tucapalma")
    let inputpydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    if(inputhipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputcapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputratigueya.checked){
        spanMascotaJugador.innerHTML =  "Ratigueya"
    } else if (inputlangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputtucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (inputpydos.checked){
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("Debes seleccionar una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else if (mascotaAleatorio == 6){
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "FUEGO"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    combate ()
}
function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("🟰 Empate 🟰")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("⭐¡Ganaste!⭐")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("⭐¡Ganaste!⭐")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("⭐¡Ganaste!⭐")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("😭¡Perdiste!😭")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }    
    revisarVidas()
}
function revisarVidas() {
    if(vidasEnemigo == 0){
        crearMensajeFinal("⭐ Felicitaciones ¡GANASTE! ⭐")
    } else if(vidasJugador == 0){
        crearMensajeFinal("😭 Lo siento, PERDISTE 😭")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + " La mascota del enemigo ataco con " + ataqueEnemigo + " --- " + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
