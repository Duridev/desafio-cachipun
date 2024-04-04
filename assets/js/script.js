
let veces = parseInt(prompt("¿Cuántas veces deseas jugar? Elije un número de veces del 1 al 5"));

let ganaste = 0;
let perdiste = 0;

if (veces >= 1 && veces <= 5) {
    while (veces > 0) {
        veces--;
        let elige = prompt("Ingresa uno de los siguientes valores:\n\n  Piedra\n  Papel\n  Tijera\n" ).toLowerCase();


        if ((elige === "piedra") || (elige === "papel") || (elige === "tijera")) {
            let pcRandom =  Math.floor(Math.random() *  3);
            let pcElige
            
            if (pcRandom === 0) {
                pcElige = "piedra";
            } else if (pcRandom ===  1) {
                pcElige = "papel";
            } else {
                pcElige = "tijera";
            };
    
            if (elige === pcElige) {
                alert(`Tu elegiste ${elige} y la computadora escogió  ${pcElige}.\nEsto es un Empateee!!!`);
            } else if ((elige === "piedra" && pcElige === "tijera") || (elige === "papel" && pcElige === "piedra") || (elige === "tijera" && pcElige === "papel" ) ) {
                alert(`Tu elegiste ${elige} y la computadora escogió  ${pcElige}.\nBuena jugada. Ganaste!!!`);
                ganaste+=1;
            } else {
                alert(`Tu elegiste ${elige} y la computadora escogió  ${pcElige}.\nEsta vez perdiste.`);
                perdiste+=1;
            }
        }else{
            alert("Has perdido en esta ocación porque no escribiste una opción valida. Recuerda escibir Piedra, Papel o Tijera.");
        }
    }
    if (ganaste > perdiste) {
        alert(`Tú has ganado ${ganaste} ${ganaste == 1 ? "vez" : "veces"} y tu oponente ${perdiste} ${perdiste == 1 ? "vez" : "veces"}.\nEsto te convierte en el ganador de esta ronda.\nFelicidades!!! `);
    } else if (perdiste > ganaste){
        alert(`Tú has ganado ${ganaste} ${ganaste == 1 ? "vez" : "veces"} pero tu oponente te venció ${perdiste} ${perdiste == 1 ? "vez" : "veces"}!!.\nEsta vez la suerte no ha estado de tu lado.\nPero ya sabes lo que dicen. Mala suerte en el juego, buena suerte en el amor 😅 `);
    } else {
        alert(`Una ronda competitiva, Tú has ganado ${ganaste} ${ganaste == 1 ? "vez" : "veces"} y tu oponente te venció ${perdiste} ${perdiste == 1 ? "vez" : "veces"}.\n\nEs un Empate!!\n`);
    };

} else {
    alert('¿Qué parte de "elige un número entre 1 y 5" no entendiste...? 😑')
}

