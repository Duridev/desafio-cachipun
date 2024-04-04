
let veces = parseInt(prompt("¿Cuántas veces deseas jugar? Elije un número de veces del 1 al 5"));

let ganaste = 0;
let perdiste = 0;

if (veces >= 1 && veces <= 5) {
    while (veces > 0) {
        veces--;
        let elige = prompt("Ingresa uno de los siguientes valores:\n\nPiedra\nPapel\nTijera\n*Recuerda escribir la primera letra con mayúscula.\n" );


        if ((elige === "Piedra") || (elige === "Papel") || (elige === "Tijera")) {
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
                ganaste+=1;
            } else if ((pcElige === "Piedra" && elige === "Tijera") || (pcElige === "Papel" && elige === "Piedra") || (elige === "Tijera" && pcElige === "Papel" ) ) {
                alert(`Tu elegiste ${elige} y la computadora escogió  ${pcElige}.\nMejor suerte para la proóxima, esta vez perdiste`);
                perdiste+=1;
            }
        }else{
            alert("Has perdido en esta ocación porque no escribiste una opción valida. Recuerda escibir la primera letra con mayúscula.")
        }
    }
} else {
    alert("¿Qué parte de elige un número entre 1 y 5 no entendiste...? 😑")
}

if (ganaste > perdiste) {
    alert(`Tú has ganado ${ganaste} veces y tu oponente solo ${perdiste} veces.\nEsto te convierte en el ganador de esta ronda.\nFelicidades!!! `);
} else if (perdiste > ganaste){
    alert(`Tú has ganado ${ganaste} veces pero tu oponente te venció ${perdiste} veces!!.\nEsta vez la suerte no ha estado de tu lado.\nPero ya sabes lo que dicen. Mala suerte en el juego, buena suerte en el amor 😅 `);
} else {
    alert(`Una ronda competitiva, Tú has ganado ${ganaste} veces y tu oponente te venció ${perdiste} veces.\n\nEs un Empate!!\n`);
};

