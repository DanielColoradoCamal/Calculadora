const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const btnNumeros = document.querySelectorAll('.numero');
const btnOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

btnNumeros.forEach(boton => {
    boton.addEventListener('click', () =>
        display.agregarNumero(boton.innerHTML));
});


btnOperadores.forEach(boton => {
    boton.addEventListener('click', () =>
        display.computar(boton.value));
});