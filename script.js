document.addEventListener('DOMContentLoaded', () => {
        const btAnterior = document.querySelector('.btnAnterior');
        const btSiguiente = document.querySelector('.btnSiguiente');
        const carrContenido = document.querySelector('.carruContenido');
        const carrImgs = document.querySelector('.carruImgs');
        const imgs = document.querySelectorAll('.carruImgs img');
        let contador = 0;

        const tam = carrContenido.clientWidth;
        console.log(tam);
        btSiguiente.addEventListener('click', () => {
            contador++;
            if (contador === imgs.length) {
                contador = 0;
            }
            carrImgs.style.transform = `translateX(-${tam * contador}px)`;
        });
});
