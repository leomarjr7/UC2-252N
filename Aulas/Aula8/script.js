//Exercicio 1


/*const interruptorA = true
const interruptorB = false

const resultado = interruptorA && interruptorB
console.log(resultado)  // false

const interruptorB1 = false
const interruptorC1 = true

const resultado1 = interruptorB1 && interruptorC1
console.log(resultado1) // false

const interruptorA2 = true
const interruptorC2 = true

const resultado2 = interruptorA2 && interruptorC2
console.log(resultado2) // true

const interruptorA3 = true
const interruptorB3 = false
const interruptorB4 = false
const interruptorC3 = true

const resultado3 = interruptorA3 && interruptorB3 && interruptorB4 && interruptorC3
console.log(resultado3) // false



//Exercicio 2


const interruptorA = true
const interruptorB = false

const resultado = interruptorA || interruptorB
console.log(resultado) // true

const interruptorB1 = false
const interruptorC1 = true

const resultado1 = interruptorB1 || interruptorC1
console.log(resultado1) // true

const interruptorA2 = true
const interruptorC2 = true

const resultado2 = interruptorA2 || interruptorC2
console.log(resultado2) // true

const interruptorA3 = true
const interruptorB3 = false
const interruptorC3 = true 

//TESTE OPERADOR TRUE
//TESTE OPERADOR FALSE

//A3 = true

const resultado = !interruptorA3
console.log(resultado) // false


//Exercicio 3


let nomePessoa = prompt("Qual é o seu nome?")
let idadePessoa = prompt("Qual é a sua idade?")
let anoNascimento = prompt("Qual ano você nasceu?")

let minhaIdadeFutura = idadePessoa + 25
let maiorIdade = 18
let idadeFuturo = 2050 - anoNascimento
let anoAtual = 2025

console.log("Seu nome é:", nomePessoa)
console.log("Sua idade é:", idadePessoa)
console.log("É maior de idade?", idadePessoa >= maiorIdade)
console.log("Sua idade em 2050 será:", idadeFuturo)
console.log("Sua idade será:", maiorIdade >= idadePessoa)*/

//Exercicio 4    1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean

//Exercicio 5    2)

const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")










