const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 8. Cálculo de área e tinta
rl.question("Digite a largura da parede em metros: ", (largura) => {
    rl.question("Digite a altura da parede em metros: ", (altura) => {
        let area = parseFloat(largura) * parseFloat(altura);
        let tinta = area / 2;
        console.log(`A área da parede é ${area.toFixed(2)}m² e você precisará de ${tinta.toFixed(2)} litros de tinta.`);
        rl.close();
    });
});  