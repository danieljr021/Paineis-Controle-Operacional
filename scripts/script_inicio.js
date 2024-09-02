const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let index = 0;

// Função para mostrar o slide atual
function showSlide(n) {
    index += n;

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }

    carousel.style.transform = `translateX(${-index * 100}%)`;
    updateIndicators();
}

// Função para atualizar as bolinhas de navegação
function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Criar bolinhas de navegação
function createIndicators() {
    slides.forEach(() => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        indicator.addEventListener('click', () => {
            index = [...indicatorsContainer.children].indexOf(indicator);
            showSlide(0);
        });
        indicatorsContainer.appendChild(indicator);
    });
    updateIndicators();
}

// Navegação automática
let autoSlide = setInterval(() => showSlide(1), 5000); 

prevButton.addEventListener('click', () => {
    clearInterval(autoSlide); // Pausar a navegação automática
    showSlide(-1);
    autoSlide = setInterval(() => showSlide(1), 5000); // Reiniciar a navegação automática com o novo intervalo
});

nextButton.addEventListener('click', () => {
    clearInterval(autoSlide); // Pausar a navegação automática
    showSlide(1);
    autoSlide = setInterval(() => showSlide(1), 5000); // Reiniciar a navegação automática com o novo intervalo
});

createIndicators();


