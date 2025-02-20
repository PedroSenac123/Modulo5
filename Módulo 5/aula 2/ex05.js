const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 5. Preço da passagem
rl.question("Digite a distância da viagem em Km: ", (distancia) => {
    let preco = parseFloat(distancia) <= 200 ? 0.50 : 0.45;
    let valorPassagem = parseFloat(distancia) * preco;
    console.log(`O valor da passagem é R$${valorPassagem.toFixed(2)}`);
    rl.close();
});