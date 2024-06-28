/* 1) exercício proposto pela aluda (concluído)

alert ('Boas vindas ao nosso site!');

let nome = 'Lua';

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert ('Erro! Preencha todos os campos');

let mensagemDeFerro = 'Erro! Preencha todos os campos';
alert (mensagemDeFerro);

let nome = prompt ('Qual seu nome? ');
let idade = prompt ('Qual sua idade? ');

if (idade >= 18) {
    alert ('Pode tirar a habilitação');
}


 2) 

diaDaSemana = prompt ('Qual o dia da semana?');

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert ('Bom final de semana!');
} 
else {
    alert ('Boa semana!');
}

---

let numero = prompt ('Digite um número: ');

if (numero > 0) {
    alert ('Positivo');
}
else if (numero < 0) {
    alert ('Negativo');
}
else {
    alert ('Nem positivo, nem negativo');
}

---

pontos = 105;

if (pontos >= 100) {
    alert ('Parabéns, você venceu');
} else {
    alert ('Tente novamente para ganhar.');
}

---

let saldoConta = 466.54;
alert (`Seu saldo é R$${saldoConta}`);

---

let nomeUsuario = prompt ('Digite seu nome: ');
    alert (`Bem vindo (a) ${nomeUsuario}`);
    

3)

let numero = 1;
while (numero <= 10 ) {
    numero++;
}


let numero = 10;
while (numero >= 0) {
    alert (numero--);
}

let numero = prompt ('Digite um número: ');

while (numero >= 0) {  
        alert (numero--);
}


let numero = prompt ('Digite seu número: ');
let contador = 0;

while (numero >= contador) {
    alert (contador++);
}



let palavraPessoa = "";


let numero = quantidadePessoas == 1  ?  "pessoa" : "pessoas" ;


console.log('Seja bem vindo');

let nome = "Charles";
console.log(`Seja bem vindo ${nome}`);

let nome = "Charles"
alert(`Seka bem vindo ${nome}`)

let linguagem;
linguagem = prompt ("Qual a linguagem de programação que você mais gosta?");
console.log (linguagem);



let numero = 1

while (numero <= 10){
    console.log (numero);
    numero += 1;
}

let nota = 8;

if (nota >= 7) {
    console.log ('Aprovado')
else:
    console.log ('Reprovado')
}

let secretNumber = parseInt (Math.random() * 1000);
console.log (secretNumber)
*/