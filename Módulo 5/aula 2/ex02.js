const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 2. Verificar ano bissexto
rl.question("Digite um ano: ", (ano) => {
    let anoInt = parseInt(ano);
    if ((anoInt % 4 === 0 && anoInt % 100 !== 0) || anoInt % 400 === 0) {
        console.log(`${anoInt} é um ano bissexto.`);
    } else {
        console.log(`${anoInt} não é um ano bissexto.`);
    }
    rl.close();
});