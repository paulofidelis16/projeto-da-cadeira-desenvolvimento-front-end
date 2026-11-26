const entrega = document.getElementById("entrega");
const pagamento = document.getElementById("pagamento");

entrega.addEventListener("change", function () {
    document.getElementById("dados-entrega").style.display =
        entrega.value === "entrega" ? "block" : "none";
});

pagamento.addEventListener("change", function () {
    document.getElementById("campo-troco").style.display =
        pagamento.value === "dinheiro" ? "block" : "none";
});

document.getElementById("pedido").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Seu pedido foi feito com sucesso! Obrigado pela preferencia, volte sempre!");
    this.reset();
    document.getElementById("dados-entrega").style.display = "none";
    document.getElementById("campo-troco").style.display = "none";
});