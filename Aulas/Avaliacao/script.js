/*
//Desafio 1

const velocidadeMadeira = 30
const velocidadePedra = 40
const velocidadeFerro = 60
const velocidadeDiamante = 90
//Aqui se fala qual material a picareta vai ser feita e qual sua velocidade

const blocoMinerar = "obisidian"
//Aqui vai ser o bloco que vai ser minerado
if (blocoMinerar === "obisidian" || blocoMinerar === "Obsidiana") {
  console.log(`Use Picareta de diamante é a mais tri: Velocidade ${velocidadeDiamante}!`)
} else if (blocoMinerar === "Pedra") {
  console.log(`Picareta de Ferro ou Pedra é o melhor pae: Velocidade ${velocidadeFerro}!`)
} else {
  console.log(`Qualquer bglh serve irmão, mas vai na de madeira que é sereno: Velocidade ${velocidadeMadeira}!`)
}
//Aqui ele vai analisar qual o bloco que vai ser minerado e indicar a melhor picareta para minerar aquele bloco


//Deasfio 2

let danoEspada = 6;
let forcaEncantamento = 1.5;
let armaduraInimiga = 2;
let vidaInimiga = 20;
//Aqui estão as variaveis iniciais

danoBruto = danoEspada * forcaEncantamento
danoFinal = danoBruto - armaduraInimiga
vidaRestante = vidaInimiga - danoFinal
//Aqui são os calculos para descobrir o dano final e a vida restante do inimigo

if (vidaInimiga <= 0) {
    console.log("Seu inimigo foi derrotado.")
} else {
    console.log("Seu inimigo sobreviveu com ", vidaRestante, " de vida.")
} 
//Aqui ele vai analisar se o inimigo foi derrotado ou não
*/

//Desafio 3

const temDiamantes = true
let nivelMesaCraft = 2
const temGravetos = false
let temFerro = 9
//Aqui mostra os recursos que o jogador tem

if ((!temGravetos || nivelMesaCraft < 2) && 
(temDiamantes && temFerro >= 10) ){
    console.log("Você pode craftar uma picareta de diamante!")
} else {
    console.log("Você não pode craftar uma picareta de diamnete!")
}
//Aqui depende dos recursos que o jogador tem para saber se ele pode ou não craftar a picareta de diamante