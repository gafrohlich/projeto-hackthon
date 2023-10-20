function myFunction(){
  let div = document.getElementById("display"); 
  
  div.classList.remove("d-none");
  div.classList.add("d-block");
  console.log(div.classList)
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validação básica - verifica se os campos estão preenchidos
    if (name && email && message) {
        // Simulação de envio de dados para o servidor (substitua isso com sua lógica de envio real)
        console.log("Nome: " + name);
        console.log("E-mail: " + email);
        console.log("Mensagem: " + message);

        // Limpar os campos após o envio bem-sucedido
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
});

});                               
