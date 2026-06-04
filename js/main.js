// ==========================================
// 1. CRONÓMETRO REGRESIVO OPERATIVO
// ==========================================
const fechaBoda = new Date(2025, 6, 24, 14, 0, 0).getTime(); 

const intervalo = setInterval(function() {
    const ahora = new Date().getTime();
    const dist = fechaBoda - ahora;

    const d = Math.floor(dist / (1000 * 60 * 60 * 24));
    const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dist % (1000 * 60)) / 1000);

    if (document.getElementById("dias")) {
        document.getElementById("dias").innerText = d < 10 && d >= 0 ? "0" + d : (d < 0 ? "00" : d);
        document.getElementById("horas").innerText = h < 10 && h >= 0 ? "0" + h : (h < 0 ? "00" : h);
        document.getElementById("minutos").innerText = m < 10 && m >= 0 ? "0" + m : (m < 0 ? "00" : m);
        document.getElementById("segundos").innerText = s < 10 && s >= 0 ? "0" + s : (s < 0 ? "00" : s);
    }

    if (dist < 0) {
        clearInterval(intervalo);
        const contenedor = document.querySelector(".contador-moderno");
        if (contenedor) {
            contenedor.innerHTML = "<div style='grid-column: span 4; font-family:var(--fuente-editorial); font-size:2rem; color:var(--color-vanguardia);'>¡Llegó el gran día! 🎉</div>";
        }
    }
}, 1000);

// ==========================================
// 2. SISTEMA AVANZADO DE AUDIO STREAMING
// ==========================================
function toggleMusica() {
    const audio = document.getElementById("musica-boda");
    const botonFlotante = document.getElementById("btn-musica");
    const icono = document.getElementById("icono-reproductor");
    
    if (audio.paused) {
        audio.play().then(() => {
            // Cuando la música suena de verdad: cambia el icono y activa el pulso visual
            icono.className = "fa-solid fa-pause";
            icono.style.marginLeft = "0px"; // Ajuste fino de centrado
            botonFlotante.classList.add("sonando");
        }).catch(err => {
            console.log("Error de streaming o restricción de autoplaya en el navegador: ", err);
        });
    } else {
        audio.pause();
        // Al pausar: regresa al icono de Play y remueve la animación de ondas
        icono.className = "fa-solid fa-play";
        icono.style.marginLeft = "2px"; 
        botonFlotante.classList.remove("sonando");
    }
}
