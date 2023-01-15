const carrusel = document.querySelector('.carrusel-items');
const main = document.querySelector('.main');

let maxscroll = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null;
let step = 1600;
let imagenes = document.querySelector('.carrusel-item')

const start = () => {
    intervalo = setInterval(function (params) {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxscroll) {
            step = -6400

        } else if (carrusel.scrollLeft === 0) {
            step = 1600
        }
    }, 3000);
}

const stop = () => {
    clearInterval(intervalo);
};

main.addEventListener("mouseover", () => {
    stop();
});

main.addEventListener("mouseout", () => {
    start();
});

start();