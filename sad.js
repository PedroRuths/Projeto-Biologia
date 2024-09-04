document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert('Obrigado por entrar em contato! Nós responderemos em breve.');
    this.reset(); // Limpa o formulário
});
