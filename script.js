// Elementos necesarios
const progressBar = document.getElementById("progress-bar");
const loadingText = document.getElementById("loading-text");
const messageContainer = document.getElementById("message-container");
const captchaContainer = document.getElementById("captcha-container");
const startButton = document.getElementById("start-button");
const audioPlayer = document.getElementById("audio-player");
const startExperience = document.getElementById("start-experience");

// Botón para iniciar la experiencia
startButton.addEventListener("click", () => {
    // Ocultar el botón de inicio
    startExperience.style.display = "none";

    // Mostrar el contenedor principal
    document.getElementById("container").style.display = "block";

    // Reproducir el audio con volumen máximo
    audioPlayer.volume = 1;
    audioPlayer.play();

    // Configuración para 16.7 segundos
    const duration = 16.7 * 1000; // 16.7 segundos en milisegundos
    const intervalTime = 100; // Tiempo de cada intervalo en milisegundos
    const totalIntervals = duration / intervalTime; // Cantidad total de intervalos
    const increment = 100 / totalIntervals; // Incremento por intervalo

    // Iniciar la barra de carga
    let progress = 0;
    const interval = setInterval(() => {
        progress += increment;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);

            // Ocultar barra de carga y texto de "Cargando"
            progressBar.parentElement.style.display = "none";
            loadingText.style.display = "none";

            // Mostrar mensaje y captcha
            messageContainer.style.display = "block";
            captchaContainer.style.display = "block";
        }
    }, intervalTime);
});

// Captcha: Evita acciones al hacer clic
document.getElementById("captcha-checkbox").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Más suave, intenta de nuevo");
});