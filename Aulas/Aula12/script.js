/*let condicao1 = true
let condicao2 = true

if(condicao1&&condicao2){
    console.log("Executou o if do operador && AND")
}

if(condicao1||condicao2){
    console.log("Executou o if do operador || OR")
}

if(!condicao1){
    console.log("Executou o if do operador ! NOT")
}



let idade = 18 
const idadeMinima = prompt("Qual é a sua idade?")
const ensinoMedio = prompt("Você concluiu o ensino médio? (sim/não)")
const outraFaculdade = prompt("Você está cursando outra faculdade? (sim/não)")

let concluidoEnsinoMedio = true
let idadeMaior18 = idade >= 18
let cursandoOutraFaculdade = false

if(concluidoEnsinoMedio && idadeMaior18 && !cursandoOutraFaculdade){
    console.log("Pode entrar na faculdade")
} else {
    console.log("Não pode entrar na faculdade")
}
const respostaDoUsuario = prompt ("Digite o número que você quer testar")
const numero = Number (respostaDoUsuario)
if (numero % 2 === 0) {
console. log( "Passou no teste.")
} else {
console. log("Não passou no teste.")
}

// O codigo ve se o numero é par ou impar o 0 é considerado par, entao so numeros pares passam no teste
//Ele imprime passou no teste se o numero digitado pelo usuario for par
//Para numeros impares ele imoprime não passou no teste


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
        case "Maçã":
            preco = 2.25
        break;
    case "Uva":
        preco = 0.30
    break;
case "Pêra":
    preco = 5.5
break;
default:
    preco = 5
break;}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//O código serve para informar o preço da fruta escolhida pelo usuario
//O preço da fruta Maçã é R$2.25
//Se não restirasse o break a pera teria o preço de 5,00 que é o valor do default

let numero = Number(prompt("Digite o primeiro número."))
if (numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem)

// Esta pedindo parea o usuario digitar um numero
// Se o numero for maior que zero ele vai imprimir a mensagem no console, se tivesso o -10 nao imprimiria nada, pois não possui o else
// Vai dar erro porque a variavel mensagem foi declarada dentro do bloco if

let idade = Number(prompt("Digite sua idade:"))
if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
} 

let turno = prompt("Em qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
if (turno === "m") {
    console.log("Bom dia!")
} else if (turno === "v") {
    console.log("Boa tarde!")
} else if (turno === "n") {
        console.log("Boa noite!")
} else {
    console.log("Turno desconehcido")
} 

let turno1 = prompt("Em qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
let horario

switch(turno1) {
case "v":
horario = "Bom dia!"
break;
case "m":
horario = "Boa tarde!"
break;
case "n":
horario = "Boa noite!"
break;
default:
horario = "Dseconhecido"
break;
}
console.log(horario)*/

let filme = prompt("Qual gênero de filme você vai assistir?")
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))
if (filme === )
