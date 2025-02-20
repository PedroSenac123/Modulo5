const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 4. Desconto por sexo
rl.question("Digite seu nome: ", (nome) => {
    rl.question("Digite seu sexo (M/F): ", (sexo) => {
        rl.question("Digite o valor das compras: ", (valor) => {
            let desconto = sexo.toUpperCase() === 'F' ? 0.13 : 0.05;
            let valorFinal = valor * (1 - desconto);
            console.log(`${nome}, o valor final com desconto é R$${valorFinal.toFixed(2)}`);
            rl.close();
        });
    });
});