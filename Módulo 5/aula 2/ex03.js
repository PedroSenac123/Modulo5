const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 3. Situação em relação ao alistamento militar
rl.question("Digite o ano de nascimento: ", (anoNascimento) => {
    let idade = new Date().getFullYear() - parseInt(anoNascimento);
    if (idade < 18) {
        console.log(`Faltam ${18 - idade} anos para o alistamento.`);
    } else if (idade > 18) {
        console.log(`Já se passaram ${idade - 18} anos do alistamento.`);
    } else {
        console.log("Está na idade de se alistar este ano.");
    }
    rl.close();
});
