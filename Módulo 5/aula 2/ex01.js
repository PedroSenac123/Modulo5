const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 1. Multa por excesso de velocidade
rl.question("Digite a velocidade do carro em Km/h: ", (velocidade) => {
    let vel = parseFloat(velocidade);
    if (vel > 80) {
        let multa = (vel - 80) * 5;
        console.log(`Você foi multado! O valor da multa é R$${multa.toFixed(2)}`);
    } else {
        console.log("Velocidade dentro do limite permitido.");
    }
    rl.close();
});