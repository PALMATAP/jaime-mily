// ==========================================
// 1. LÓGICA DEL CRONÓMETRO REGRESIVO
// ==========================================
// Configuración de la Fecha Programada (24 de Julio del 2025, 14:00 hrs)
const fechaBoda = new Date(2025, 6, 24, 14, 0, 0).getTime(); 

const intervalo = setInterval(function() {
    const ahora = new Date().getTime();
    const dist = fechaBoda - ahora;

    // Cálculos matemáticos de tiempo
    const d = Math.floor(dist / (1000 * 60 * 60 * 24));
    const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dist % (1000 * 60)) / 1000);

    // Renderizado en el HTML con ceros a la izquierda si es menor a 10
    if (document.getElementById("dias")) {
        document.getElementById("dias").innerText = d < 10 && d >= 0 ? "0" + d : (d < 0 ? "00" : d);
        document.getElementById("horas").innerText = h < 10 && h >= 0 ? "0" + h : (h < 0 ? "00" : h);
        document.getElementById("minutos").innerText = m < 10 && m >= 0 ? "0" + m : (m < 0 ? "00" : m);
        document.getElementById("segundos").innerText = s < 10 && s >= 0 ? "0" + s : (s < 0 ? "00" : s);
            }

    // Qué pasa cuando llega la fecha
    if (dist < 0) {
        clearInterval(intervalo);
        const contadorContenedor = document.querySelector(".contador-moderno");
        if (contadorContenedor) {
            contadorContenedor.innerHTML = "<div style='grid-column: span 4; font-family:var(--fuente-editorial); font-size:2rem; color:var(--color-vanguardia);'>¡Llegó el gran día! 🎉</div>";
        }
    }
}, 1000);

// ==========================================
// 2. CONTROL DEL REPRODUCTOR DE AUDIO
// ==========================================
function toggleMusica() {
    const audio = document.getElementById("musica-boda");
    const icon = document.querySelector("#btn-musica i");
    
    if (audio.paused) {
        audio.play().catch(err => {
            console.log("El navegador bloqueó la reproducción automática. Se requiere interacción del usuario.");
        });
        icon.className = "fa-solid fa-pause";
    } else {
        audio.pause();
        icon.className = "fa-solid fa-play";
    }
}