const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 6. Antecessor e sucessor
rl.question("Digite um número inteiro: ", (numero) => {
    let num = parseInt(numero);
    console.log(`O antecessor de ${num} é ${num - 1} e o sucessor é ${num + 1}`);
    rl.close();
});
