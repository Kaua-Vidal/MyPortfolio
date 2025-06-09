function enviarWhats(event) {
            event.preventDefault(); // Impede o envio do formulário padrão

            const nome = document.getElementById('nome');
            const mensagem = document.getElementById('mensagem');
            const telefone = '5583986405935';

            const texto = `Olá, Me chamo ${nome.value}. ${mensagem.value}`;
            const msgFormatada = encodeURIComponent(texto);
            const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

            window.open(url, '_blank');
        }