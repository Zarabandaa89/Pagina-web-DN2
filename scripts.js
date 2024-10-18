function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

let currentIndex = 0;
const slideWidth = 330; // Ancho de un testimonio más el margen (300px + 30px)
const slideInterval = 3000; // Intervalo de tiempo entre cada transición (en milisegundos)

const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.children.length;

// Clona el primer testimonio y lo agrega al final del contenedor
const firstSlideClone = slides.children[0].cloneNode(true);
slides.appendChild(firstSlideClone);

function moveToNextSlide() {
    currentIndex++;

    // Calcula el desplazamiento para el siguiente slide
    const offset = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;

    // Si llegamos al final (es decir, al testimonio clonado)
    if (currentIndex === totalSlides) {
        setTimeout(() => {
            slides.style.transition = 'none'; // Desactiva la transición para el "salto"
            slides.style.transform = 'translateX(0)';
            currentIndex = 0;

            // Después de reposicionar, vuelve a habilitar la transición
            setTimeout(() => {
                slides.style.transition = 'transform 0.5s ease';
            }, 50);
        }, 500); // Temporizador para dar tiempo de completar la animación
    }
}

// Asegúrate de que la transición esté activada al cargar la página
slides.style.transition = 'transform 0.5s ease';

// Inicia el carrusel automático
setInterval(moveToNextSlide, slideInterval);





