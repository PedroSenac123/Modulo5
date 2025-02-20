const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 7. Conversor de moeda
rl.question("Quanto dinheiro você tem em R$? ", (reais) => {
    let dolares = parseFloat(reais) / 5.6;
    console.log(`Você pode comprar US$${dolares.toFixed(2)}`);
    rl.close();
});