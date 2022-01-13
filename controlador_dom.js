
let etiqueta_imagen=document.getElementById("rap")
etiqueta_imagen.src="img/Royalty.jpg"

let etiqueta_video=document.getElementById("vik")
etiqueta_video.src="vid/royalty.mp4"

let etiqueta_fecha_concierto=document.getElementById("fecha_concierto")
etiqueta_fecha_concierto.textContent="se presenta en semana santa"

let botom_cambio=document.getElementById("boton")
botom_cambio.addEventListener("click",cambiar_artista)

function cambiar_artista(){

console.log("estas haciendo clic")
let etiqueta_imagen=document.getElementById("rap")
etiqueta_imagen.src="img/unnamed.jpg"

let etiqueta_video=document.getElementById("vik")
etiqueta_video.src="vid/vik.mp4"

let etiqueta_fecha_concierto=document.getElementById("fecha_concierto")
etiqueta_fecha_concierto.textContent="hoy"

}
