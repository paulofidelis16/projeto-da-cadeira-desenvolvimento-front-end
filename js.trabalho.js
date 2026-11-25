const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector('[name="nome"]').value.trim();
    const telefone = document.querySelector('[name="telefone"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const cpf = document.querySelector('[name="CPF"]').value.trim();
    const cidade = document.querySelector('[name="Cidade"]').value.trim();
    const endereco = document.querySelector('[name="endereco"]').value.trim();

    if (nome === "") {
        alert("Por favor, digite seu nome!");
        return;
    }

    if (telefone === "" || email === "" || cidade === "") {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    alert(
        "Cadastro realizado com sucesso!\n\n" +
        "Olá, " + nome + "!\n" +
        "Telefone: " + telefone + "\n" +
        "E-mail: " + email + "\n" +
        "CPF: " + (cpf || "não informado") + "\n" +
        "Cidade: " + cidade + "\n" +
        "Endereço: " + (endereco || "não informado")
    );

    formulario.reset();
});