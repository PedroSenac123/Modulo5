const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o primeiro número inteiro:", (num1) => {
    rl.question("Escolha um segundo número", (num2) => {
        let soma = parseInt(num1) + parseInt(num2);
        console.log(`Olá, a soma de ${num1} e ${num2} é: ${soma}`)
    });
    
    rl.close();
});