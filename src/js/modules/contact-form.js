export function initContactForm() {
    const form = document.querySelector('.contact-form');

    function realTimeCheck(){    
        if (!form) return;

        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            input.addEventListener("input", () => {
                if (!input.checkValidity() || input.value.trim() === "") {
                    input.classList.add('input-error');
                    setTimeout(() => {
                        input.classList.remove('input-error');
                    }, 3000);
                } else {
                    input.classList.remove('input-error');
                }
            });
        });
    }

    function submitFeedback() {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(input => {
                if (!input.checkValidity() || input.value.trim() === "") {
                    input.classList.add('input-error');
                    setTimeout(() => {
                        input.classList.remove('input-error');
                    }, 3000);
                    valid = false;
                } else {
                    input.classList.remove('input-error');
                }
            });
            if (!valid) return; // No envía ni muestra mensaje si hay errores
            setTimeout(() => {
                showSuccessMessage();
            }, 1000);
        });
    }

    function showSuccessMessage() {
        const oldMsg = document.querySelector('.form-success-msg');
        if (oldMsg) oldMsg.remove();

        // Crea el mensaje flotante
        const msg = document.createElement('div');
        msg.className = 'form-success-msg';
        msg.textContent = '¡Formulario enviado correctamente!';
        document.body.appendChild(msg);

        // Elimina el mensaje después de 2 segundos
        setTimeout(() => {
            msg.remove();
        }, 2000);
    }

    realTimeCheck();
    submitFeedback();
}
