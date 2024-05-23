document.addEventListener('DOMContentLoaded', () => {
    const nombreDir = window.location.pathname;
    if (nombreDir.endsWith("/index.html")) {
        const btAnterior = document.querySelector('.btnAnterior');
        const btSiguiente = document.querySelector('.btnSiguiente');
        const carrImgs = document.querySelector('.carruImgs');
        const imgs = document.querySelectorAll('.carruImgs img');
        let contador = 0;

        btSiguiente.addEventListener('click', () => {
            contador++;
            if (contador === imgs.length) {
                console.log(contador);
                contador = 0;
            }

            carrImgs.style.transition = 'transform 0.4s ease-in-out';
            carrImgs.style.transform = `translateX(-${800 * contador}px)`;

        });

        btAnterior.addEventListener('click', () => {
            contador--;
            if (contador < 0) {
                contador = imgs.length - 1;
            }
            carrImgs.style.transition = 'transform 0.4s ease-in-out';
            carrImgs.style.transform = `translateX(-${800 * contador}px)`;
        });
    }
    
    if (nombreDir.endsWith("/contacto.html")) {
        const formulario = document.querySelector('.formulario');
        const msj = document.querySelector('.mensaje');

        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const nom = document.querySelector('.nombre').value;
            const corr = document.querySelector('.correo').value;
            const msjUsu = document.querySelector('.mensajeContacto').value;

            if (nom.trim() === '' || corr.trim() === '' || msjUsu.trim() === '') {
                msj.innerHTML = '<p>Debe rellenar todos los campos.</p>';
                return;
            }

            const corrR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!corrR.test(corr)) {
                msj.innerHTML = '<p>Debe introducir un correo electrónico válido.</p>';
                return;
            }

            msj.innerHTML = `
                <p>De Pastelería CJF agradecemos tu mensaje.</p>
                <ul>
                    <li><strong>Nombre:</strong> ${nom}</li>
                    <li><strong>Correo:</strong> ${corr}</li>
                    <li><strong>Mensaje:</strong> ${msjUsu}</li>
                </ul>
            `;
            formulario.reset();
        });
    }
});
