//Look maluco

/*let digiteNumero1 = Number(prompt("Me diga quantos acessórios você está usando:"))
let digiteNumero2 = Number(prompt("Me diga quantas cores você está usando"))
let digiteNumero3 = Number(prompt("Me diga o fator brilho que você está usando (de 1 a 10)"))

let numerosPontuacao = (digiteNumero1  *5) + (digiteNumero2 *3) + (digiteNumero3 *10)
console.log(numerosPontuacao)

metaPontuacao = 80

aprovado = numerosPontuacao >= metaPontuacao
reprovado = numerosPontuacao < metaPontuacao

if (numerosPontuacao >= metaPontuacao) {
    console.log("Aprovado")
}
else 
{
    console.log("Reprovado")
}


let descricao = prompt("Descreva seu look de hoje:")
let corPrincipal = prompt("Qual a cor principal do seu look?")

console.log("Descrição do look:", descricao.length)

let temTamanhoAdequado = descricao.length >= 20
console.log("O look tem  mais de 20 letras?", temTamanhoAdequado)

descricao = descricao.toLowerCase()
console.log("Descrição do look:", descricao)

let = ["Preto", "Branco", "Rosa", "Cinza", "Laranja", "Amarelo", "Vermelho", "Azul"]


let condicao1 = true
if (condicao1){
//Como o valor é true,
//O codigo do bloco do if será executado
console.log("Entrou no if 1")
}

let condicao2 = false
if (condicao2){
//Como o valor é false
//O codigo do bloco do if NÃO será executado
console.log("Entrou no if 2")
}

let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

if (num1 === num2) {
    console.log("Executou o if")
    console.log("O primeiro número é igual que o segundo.")
} else {
console.log("Executou o else")
console.log("Os números são diferentes")

}

let condicao1 = false
let condicao2 = false
let condicao3 = true

if(condicao1){
console.log("Entrou no IF 1")
} 
else if(condicao2){
console.log("Entrou no else IF 1")
} 
else if(condicao3){
console.log("Entrou no else IF 2")
} 
else
console.log("Entrou no ELSE")

let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

const resultado1 = num1 > num2
const resultado2 = num1 < num2
const resultado3 = num1 === num2

if (resultado1){
    console.log("O primeiro número é maior que o segundo.")
} else if (resultado2){
    console.log("O primeiro número é menor que o segundo.")
} else if (resultado3){
    console.log("Os números são iguais.")
}

let paisOrigem = prompt("Qual é o seu país de origem?")

switch(paisOrigem){
    case 'Brasil':
        console.log("Nacionalidade Brasieleira")
        console.log("entrou no case1")
        break
        case 'EUA':
            console.log("Nacionalidade Brasileira")
            console.log("entrou no case2")
            break
            case 'India':
                console.log("Nacionalidade Indiana")
                console.log("entrou no case3")
            break 
            default :
            console.log("Nacionalidade não enconntrada")
        } */

        let pokemon = prompt("Escolha um pokemon entre Bulbasaur, Charmander, Squirtle")

        switch(pokemon.toLowerCase()){
            case 'bulbasaur':
                console.log("Bulbasaur:Planta e veneno")  
            break
        case 'charmander':
        console.log("Charmander:Fogo")
        break
        case 'squirtle':
            console.log("Squirtle :Água")
        break
    default:
        console.log("Pokemon não encontrado")
        }