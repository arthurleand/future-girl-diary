document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');

        // Validação básica
        if (!name || !email) {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }

        try {
            // URL do seu Google Apps Script Web App (você receberá esta URL depois)
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwIsZr-h0_aXnV7iC7NL2qCojh_nyp8p0wTcXkGY4-8W1EtccE3uICgKZip2Idl-tlm6A/exec';
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email })
            });

            // Como estamos usando no-cors, não podemos ler a resposta
            // Vamos assumir que deu certo se não houver erro
            showMessage('Sucesso! Verifique seu email para receber a amostra grátis.', 'success');
            form.reset();

        } catch (error) {
            console.error('Error:', error);
            showMessage('Ops! Algo deu errado. Por favor, tente novamente.', 'error');
        }
    });
});

function showMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    const form = document.getElementById('signup-form');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    // Adiciona classe para animação
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 10);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 5000);
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
