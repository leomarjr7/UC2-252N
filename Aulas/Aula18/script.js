/*const filme = {
     
    nome : "Auto da Compadecida",
    ano : 2000,
    elenco : ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
],
    transmissoesHoje : [
    { canal : "Telecine", horario : "21h" }, 
    {canal : "Canal Brasil", horario : "19h"}, 
    {canal : "Globo", horario : "14"}, 

]
}
console.log(filme.elenco[0])//Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length -1])//Virginia Cavendish
console.log(filme.transmissoesHoje[2])//Canal globo

const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // Vai sair apenas o objeto cachorro
console.log(gato)// Vai sair o objeto cachorro com o nome modificado para Juba
console.log(tartaruga)// Vai sair o objeto cachorro com o nome modificado para Jubo
// ... serve para copiar um objeto inteiro para outro sem precisar ficar repetindo as propriedades*/


function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, backender))
console.log(minhaFuncao(pessoa, "altura"))// undefined

//Exemplo de entrada
const pessoa1 = {
    nome: "Leomar",
    apelidos: ["Léo", "Jubilu", "Junior"]
}

//Exemplo de saída
"Eu sou Leomar, mas pode me chamar de: Léo, Jubilu ou Junior"