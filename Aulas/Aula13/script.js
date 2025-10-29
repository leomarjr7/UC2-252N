/*let soma1 = 0
const arrays = [10, 3, 50, 7, 0]
for (let i = 0; i<5; i++){
    
    soma1 = soma1 + arrays[i]
} 
console.log("A soma dos numeros é igual a:", soma1)


let soma = 0
const arrays1 = [11, 15, 18, 14, 12, 13]
for (let i = 0; i<6; i++){
    if(arrays1[i] %2===0){
    soma = soma + arrays1[i]
} 
}
console.log("A soma dos numeros é igual a:", soma)


const numeros = [14, 67, 89, 15, 23]
for(let numero of numeros){
    console.log("O numero é:", numero)
}


const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades!"]

let mensagem = ""
for(let i = 0; i<palavras.length; i++){
    mensagem = mensagem + palavras[i] + " " 
}  
console.log(mensagem)

//Outro tipo de fazer

const palavrasex = ["Oi", "sumido", "tudo", "bem?", "Saudades!"]

let mensagemex = ""
for(let palavra of palavrasex.length) {
    mensagemex = palavrasex[i] + " " 
}  
console.log(mensagemex)
//Aqui ele vai juntar todas as palavras do array em uma unica frase


//Interpretação de código

let valor = 0 
for(let i = 0; i < 5; i++){
    valor += i 
}
console.log(valor)
//Ele soma todos os valores de 0 a 4 e mostra o resultado final que é 10

//Interpretação de código 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}
//a)Ele vai mostrar todos os numeros maiores que 18 do array

//Interpretação de código 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = " "
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}
//Ele vai mostrar uma escada de asteriscos com a quantidade de linhas que o usuario pedir

let bichinhos = Number(prompt("Quantos animais de estimação você tem?"))
if(bichinhos===0){
console.log("Que pena! Você pode adotar um pet!")
} else if(bichinhos>0){
    let nomesBichinhos = []
    for(let i = 0; i<bichinhos; i++){
        let nomes = prompt("Digite o nome do seu pet:")
        nomesBichinhos.push(nomes)
    }
    console.log("Os nomes dos seus pets são:", nomesBichinhos)
}
//Ele vai perguntar quantos bichinhos o usuario tem, se for 0 ele mostra uma mensagem sugerindo adotar um pet
*/
let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45 ,50, 55 ,60, 65 ,70]
for (let numero of arrayOriginal) {
console.log(numero) 
} for (let numero of arrayOriginal) {
console.log(numero/10) 
} 
    
let novoArray = [10, 20, 30, 40, 50, 60, 70]
for (let i = 0; i<7; i++)
if(arrayOriginal[i] %2===0) {
console.log(arrayOriginal[i])
}

let arrayString = ["10", "20", "30", "40", "50", "60", "70"]
    
    
