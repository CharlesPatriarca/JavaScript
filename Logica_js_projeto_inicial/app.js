alert ('Boas vindas ao labirinto da mente');
let maxNumber = 100;
let secretNumber  = parseInt (Math.random() * maxNumber + 1);
console.log (secretNumber);
let chute;
let tentativas = 1;

// Condição:
/* if = se
   else = se não
   while = enquanto 
   ? = caso 
   : = se não */


while (chute != secretNumber ) {
    chute = prompt (`Escolha um número entre 1 e ${maxNumber}`);
    console.log (chute);

    if (chute == secretNumber) {
        break; // para
        
    } else {
        if (chute > secretNumber) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;  OBS.: PARA ATRIBUIR MAIS 1: ++
        tentativas++;
        
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'Tetativas' : 'Tentativa';
alert (`Boa! Você descobriu o número secreto ${secretNumber} depois de ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1) {
    alert (`Boa! Você descobriu o número secreto ${secretNumber} depois de ${tentativas} ${palavraTentativa}.`);
} else {
    alert (`Boa! Você descobriu o número secreto ${secretNumber} depois de ${tentativas} tentativa.`);
}*/
