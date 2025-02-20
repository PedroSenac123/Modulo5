const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 10. Aumento de salário
rl.question("Digite o salário atual do funcionário: ", (salarioAtual) => {
    let novoSalario = parseFloat(salarioAtual) * 1.15;
    console.log(`O novo salário com 15% de aumento é R$${novoSalario.toFixed(2)}`);
    rl.close();
});