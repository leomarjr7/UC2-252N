/*const primeiroValor = 3
const segundoValor = 4
const resultado1 = primeiroValor + segundoValor
console.log(resultado1) //7

const primeiroValor1 = 3
const segundoValor1 = 5
const resultado = primeiroValor1 * segundoValor1
console.log(resultado) //15

const primeiroValor2 = 15
const segundoValor2 = 2
const resultadoFinal = primeiroValor2 / segundoValor2
console.log(resultadoFinal) //7.5

const primeiroValor3 = 4
const segundoValor3 = 5
const resultado2 = primeiroValor3 - segundoValor3
console.log(resultado2) // -1

const primeiroValor4 = -1
const segundoValor4 = -1
const resultado3 = primeiroValor4 * segundoValor4
console.log(resultado3) // 1


const primeiroValor5 = 234
const segundoValor5 = 5
const resultado4 = primeiroValor5 % segundoValor5
console.log(resultado4) // 4 

console.log ("1"==="2")
console.log ("2"==="2")
console.log (2==="2")

console.log ("1" !== "2")
console.log ("2" !== "2")
console.log (2 !== "2")

console.log(1 > 2 )
console.log(2 > 2 )
console.log(3 > 2 )

console.log(1 >= 2 )
console.log(2 >= 2 )
console.log(3 >= 2)

console.log(1 < 2 )
console.log(2 < 2 )
console.log(3 < 2 )

console.log(1 <= 2 )
console.log(2 <= 2 )
console.log(3 <= 2)

let numeroUm = prompt("Qual é o primeiro comparador?")
let numeroDois = prompt("Qual é o segundo comparador?")

console.log("O primeiro número é igual ao segundo?", numeroUm === numeroDois)
console.log("O primeiro número é diferente ao segundo?", numeroUm !== numeroDois)
console.log("O primeiro número é maior que o segundo?", numeroUm >= numeroDois)
console.log("O primeiro número é maior que o segundo?", numeroUm <= numeroDois)*/

// EXERCICIO ONE PIECE

let ouroTotal = 75000
let membrosTripulacao = 9
let recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaTripulacao = 95

let ouroPorMembro = ouroTotal / membrosTripulacao // 8333.33
let restoOuro = ouroTotal % membrosTripulacao // 3
let novaRecompensaLuffy = recompensaBaseLuffy + aumentoRecompensa // 3150000000
let poderLuffy = recompensaBaseLuffy * bonusExperiencia // 1500000000000
let reducaoAumento = aumentoRecompensa - 50000000 // 100000000

console.log("Quanto cada membro vai receber?", ouroPorMembro, "Quanto restou de ouro?", restoOuro, "Qual é a nova recompensa do Luffy?", novaRecompensaLuffy, "Quanto de poder tem Luffy?", poderLuffy, "Quanto sobrou da recompensa?", reducaoAumento)

const forcaInimigo = 120
const chanceVitoria = 0.7
const limiteSeguranca = 0.8
const temAkumaNoMi = true
const inimigotemHaki = true
const combateJusto = 'sim'
const combateRapido = 'sim'

const podeVencer = forcaTripulacao >= forcaInimigo
const riscoAlto = chanceVitoria < limiteSeguranca
const batalhaFacil = combateJusto==combateRapido

console.log("Pode vencer?",podeVencer, "O risco é alto?", riscoAlto, "A batalha vai ser facil?", batalhaFacil)