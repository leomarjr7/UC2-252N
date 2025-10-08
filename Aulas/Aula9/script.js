//Exercicio1

/*let idadeUsuario = prompt("Qual é a sua idade?")
let idadeBestUsuario = prompt("Qual é a idade do seu melhor amigo(a)?")
idadeUsuario = Number(idadeUsuario)
idadeBestUsuario = Number(idadeBestUsuario) 
console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeUsuario > idadeBestUsuario)
console.log("Diferença de idade:", idadeUsuario - idadeBestUsuario)

//Exercicio2


let numeroPar = prompt("Insira um número par")
numeroPar = Number(numeroPar)

console.log("O resto dividido por 2:", numeroPar % 2)// Os numeros impares viram 1 e os pares viram 0.

//Exercicio3

let idadeUsuario = prompt("Qual sua idade?")
idadeUsuario = Number(idadeUsuario)

console.log("Idade do usuário em meses", idadeUsuario * 12)
console.log("Idade do usuário em dias", idadeUsuario * 365)
console.log("Idade do usuário em horas", idadeUsuario * 8766)

//Exercicio4

let primeiroNumero = prompt("Digite o primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
divisivel = primeiroNumero % segundoNumero
divisivel2 = segundoNumero % primeiroNumero

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)*/

//DESAFIO

let farenheit = 77
let celsius = (farenheit - 32) * 5/9
console.log("77°F em Celsius é igual a:", celsius, "°C")

let celsius2 = 80
let farenheit2 = (celsius2 * 9/5) + 32
console.log("80°C em Farenheit é igual a:", farenheit2, "°F")

let celsius3 = 30
let farenheit3 = (celsius3 * 9/5) + 32
console.log("30°C em Farenheit é igual a:", farenheit3, "°F")

let digiteValor = prompt("Digite um valor em Celsius para converter em Farenheit:")
let celsius4 = Number(digiteValor)
let farenheit4 = (celsius4 * 9/5) + 32
console.log("Sua coversão de", digiteValor, "°C  é igual a:", farenheit4, "°F")

let quilowattHora = 0.05
let consumoMensal = 280
let desconto = 0.15
valorConta = quilowattHora * consumoMensal
let valorComDesconto = valorConta - (valorConta * desconto)
console.log("O valor da conta de luz é:", valorConta, "e com 15% de desconto fica:", valorComDesconto, "reais")

let libra = 20
let quilograma = libra / 2.2046
console.log("20lb equivalem a", quilograma, "kg")

let oz = 10.5
let quilograma2 = oz / 0.0283495231
console.log("10.5oz equivalem a", quilograma2, "kg")

let milha = 100
let metro = milha * 1609.34
console.log("100mi equivalem a", metro, "m")

let pes = 50
let metro2 = pes * 0.3048
console.log("50ft equivalem a", metro2, "m")

let galao = 103.56
let litro = galao * 3.78541
console.log("103.56gal equivalem a", litro, "l")

let xicara = 450
let litro2 = xicara * 0.24
console.log("450xic equivalem a", litro2, "l")

let digiteValor2 = prompt("Digite um valor em xícaras para converter em litros:")
let xicara2 = Number(digiteValor2)
let litro3 = xicara2 * 0.24
console.log(digiteValor2, "xic equivalem a", litro3, "l")