const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.carousel-controls button');

let currentIndex = 0;
let intervalId = setInterval(intervalSlides, 5000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        controls[i].classList.remove('selected');
    });

    slides[index].classList.add('active');
    controls[index].classList.add('selected');
}

function changeSlide(index) {
    currentIndex = index;
    desativarBotaoSelecionado()
    restartInterval()
    showSlide(currentIndex);
}

function intervalSlides() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function restartInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(intervalSlides, 5000);
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selected');
    botaoSelecionado.classList.remove('selected');
}


