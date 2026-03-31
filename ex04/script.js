let compra = Number(prompt("Insira o valor da compra:"));
let valordesconto = Number (compra-(compra*0.1));

if (compra >= 100)
    alert (`Você ganhou um desconto de 10%. O valor final da sua compra é ${valordesconto}`)