
let veces = parseInt(prompt("¿Cuántas veces deseas jugar? Elije un número de veces del 1 al 5"));

if (veces >= 1 && veces <= 5) {
    while (veces > 0) {
        veces--;
        let elige = parseInt(prompt("Ingresa uno de los siguientes valores:\n\n-Piedra\n-Papel\n-Tijera\n" ));

        let pcRandom =  Math.floor(Math.random() *  3 + 1);
        let pcElige
        
        if (pcRandom === 1) {
            pcElige = "Piedra";
        } else if (pcRandom ===  2) {
            pcElige = "Papel";
        } else {
            pcElige = "Tijera";
        };

        if (elige === pcElige) {
            alert(`Tu elegiste ${elige} y la computadora escogió  ${pcElige}.\nEsto es un Empateee!!!`);
        } else if ((elige === "Piedra" && pcElige === "Tijera") || (elige === "Papel" && pcElige === "Piedra") || (elige === "Tijera" && pcElige === "Papel" ) ) {
            alert(`Tu elegiste ${elige} y la computadora escogió  ${pcElige}.\nBuena jugada. Ganaste!!!`);
        } else if ((pcElige === "Piedra" && elige === "Tijera") || (pcElige === "Papel" && elige === "Piedra") || (elige === "Tijera" && pcElige === "Papel" ) ) {
            alert(`Tu elegiste ${elige} y la computadora escogió  ${pcElige}.\nMejor suerte para la proóxima, esta vez perdiste`);
        }

    }
} else {
    alert("¿Qué parte de elige un número entre 1 y 5 no entendiste...? 😑")
}

