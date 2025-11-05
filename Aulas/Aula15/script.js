/*function calculaArea(altura, largura) {
    const area = altura * largura
    console.log(area)
}

calculaArea(2,3)


//declaração da função 
function imprimirOlaMundo() {
    console.log("Olá mundo!")
}
//invocação da função 
for(let i = 0; i < 3; i++){
imprimirOlaMundo();
}



//EXERCICIO

function imprimirBemVindo() {
    console.log("Bem-vindo turma 25-2N!")
}
imprimirBemVindo()

function imprimirsomaNumeros() {
  const resultado = 2 + 3
    console.log(resultado)
}
imprimirsomaNumeros()

function imprimirCalculo() {
   const calculo = 5 * 2
    console.log("O dobro de 5 é", calculo)
}
imprimirCalculo()

function nome(nomes) {
    console.log("Olá", nomes)
}
nome("Leomar") 
nome("João")
nome("Vini")
nome("Pedro")

function soma(num1, num2) {
let soma = num1 + num2
console.log(soma)
}
soma(2,3)

const a = 1 

function imprimeVariavel () {
const b = 2
console.log('Variavel a:', a)
console.log('Variavel b:', b)
}

imprimeVariavel()

console.log('Variavel a fora da função:', a)
console.log('Variavel b fora da função:', b) 
// Erro, variável b não está definida fora da função
*/
//RETORNO

function calculadaArea(altura, largura) {
    const area = altura * largura
    return area 
}

//Atribui rettorno a uma variável
const areaCalculada = calculadaArea(2,3)

//Imprime retorno no console
console.log(calculadaArea(2, 3))

const a = 1
const b = 2
function somaNumeros() {
    return a + b
}
const resultadoSoma = somaNumeros()
console.log(resultadoSoma)


let array = [10, 20, 30, 40, 50]
function novoArray() {
    return array [0] / 2
    //Falta fazer um Leomar
}
const resultado = novoArray()
console.log(resultado)