/*const soma = function( ) {
    const num1 = 5
    const num2 = 6
    const resultado = num1 + num2
console.log("A soma é:", resultado)
}
soma()

const oDobro = ( ) => {
    let dobrinho = 20 * 2
    console.log("O dobro de 20 é:", dobrinho)
}
oDobro()

const determinaMonstro = function(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue, temPelo) {
    if (transformaComLuaCheia && temPelo) {
        console.log("É um Lobisomem")
    } else if (temPeleGelada && brilhaAoSol && temSedeDeSangue) {
        console.log("É um Vampiro")
} else {
        console.log("É um Humano")
    } 
}
determinaMonstro(true, false, true, true, false)

function minhaFuncao(variavel) {
    return variavel * 5 
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a)minhaFuncao(2) = 10 minhaFuncao(10) = 50

//b)Nao aparece nada pois o console.log nao foi chamado para exibir o valor retornado pela funcao.


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// includes procura a palavra cenoura no texto inserido e retorna true ou false

let texto = function() {
    return "Eu sou Leomar, tenho 17 anos, moro em Rio Grande do Sul e sou estudante."
}
console.log(texto())


function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(2, 3))

function maior(num1, num2) {
    return num1 >= num2
}
console.log(maior(2, 3))

function par(num1){
    return (num1 % 2) === 0 
}
console.log(par(2))

function mensagem(texto){
    console.log(texto.lenght, texto.toUppercase())
} 
mensagem("teste 1")*/


let num1 = Number(prompt("Insira o primeiro número para soma:"))
let num2 = Number(prompt("Insira o segundo número para soma:"))
function soma(num1, num2) {
    return num1 + num2
}
console.log("Números inseridos:, num1, num2")
console.log("soma", soma(num1, num2))

let nume1 = Number(prompt("Insira o primeiro número para subtração"))
let nume2 = Number(prompt("Insira o primeiro número para subtração"))
function subtracao(nume1,nume2){
    return nume1 - nume2 
}
console.log("Números insiridos:, nume1, nume2")
console.log("subtração", subtracao(nume1, nume2))

let number1 = Number(prompt("Insira o primeiro número para multiplicação"))
let number2 = Number(prompt("Insira o primeiro número para multiplicação"))
function multiplicacao(number1,number2){
    return number1 * number2 
}
console.log("Números insiridos:, number1, number2")
console.log("Multiplicação", multiplicacao(number1, number2))

let numero1 = Number(prompt("Insira o primeiro número para divisão"))
let numero2 = Number(prompt("Insira o primeiro número para divisão"))
function divisao(numero1,numero2){
    return numero1 / numero2 
}
console.log("Números insiridos:, numero1, numero2")
console.log("Divisão", divisao(numero1, numero2))
