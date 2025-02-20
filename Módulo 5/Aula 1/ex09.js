const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 9. Salário por dias trabalhados
rl.question("Digite o número de dias trabalhados no mês: ", (dias) => {
    let salario = dias * 8 * 25;
    console.log(`O salário do funcionário é R$${salario.toFixed(2)}`);
    rl.close();
});