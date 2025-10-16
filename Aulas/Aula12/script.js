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
//Para numeros impares ele imoprime não passou no teste*/


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