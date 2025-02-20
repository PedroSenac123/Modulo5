const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Desafio. Verificar se é possível formar um triângulo
rl.question("Digite o primeiro segmento de reta: ", (a) => {
    rl.question("Digite o segundo segmento de reta: ", (b) => {
        rl.question("Digite o terceiro segmento de reta: ", (c) => {
            let x = parseFloat(a), y = parseFloat(b), z = parseFloat(c);
            if (x + y > z && x + z > y && y + z > x) {
                console.log("Os segmentos podem formar um triângulo.");
            } else {
                console.log("Os segmentos não podem formar um triângulo.");
            }
            rl.close();
        });
    });
});
