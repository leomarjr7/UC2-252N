// DUPLA: LEOMAR E JOÃO SILVA



let historicoAcoes = []
// array preparada para o historico de ações

function salvarAcao(texto) { 
    historicoAcoes.push(texto)// aq faço uma função para puxar e salvar o historico de ações
    console.log(texto)
}

function atacar(personagem) {
    salvarAcao(personagem.nome + " atacou causando " + personagem.nivel + " de dano")
}
// aq eu faço as funções de atacar,defender e usar a habilidade especial
function defender(personagem) {
    salvarAcao(personagem.nome + " se defendeu usando sua classe " + personagem.classe)
}

function usarHabilidade(personagem) {
    salvarAcao(personagem.nome + " usou a habilidade especial: " + personagem.habilidades[0])
}

// abaixo criamos os personagens usando objeto
const personagem1 = {
    nome: "Aragorn",
    classe: "Herói",
    nivel: 16,
    hp: 150,
    habilidades: ["Combate", "Sobrevivência", "Liderança"],
  
}

const personagem2 = {
    nome: "Legolas",
    classe: "Arqueiro Élfico",
    nivel: 15,
    hp: 130,
    habilidades: ["Tiro com Arco", "Visão Aguçada", "Agilidade Élfica"],
  
}

const personagem3 = {
    nome: "Gimli",
    classe: "Guerreiro Anão",
    nivel: 14,
    hp: 140,
    habilidades: ["Combate com Machado", "Resistência Anã", "Força Bruta"],

}

const personagem4 = {
    nome: "Gandalf",
    classe: "Mago",
    nivel: 20,
    hp: 120,
    habilidades: ["Magia", "Sabedoria", "Liderança"],
  
}
const personagem5 = {
    nome : "Smigol",
    classe : "Hobbit",
    nivel : 10,
    hp : 100,
    habilidades: ["Furtividade", "Agilidade", "Astúcia"],
   }
// aq eu coloco tds o personagens numa array para serem puxados 
let arrayPersonagens = [personagem1, personagem2, personagem3, personagem4]


atacar(personagem1)
defender(personagem5) // aq eu invoco as funções de atacar,defender e habilidade, muda qm ataca de acordo com o numero do personagem
usarHabilidade(personagem2)


console.log("Histórico de ações")
console.log(historicoAcoes)//aq eu dou console.log para mostrar o historico de ações já q ele e puxado la em cima

function adicionarPersonagem() {
    arrayPersonagens.push(personagem5) // aq adicionamos um personagem e foi escolhido o smigol
    console.log("O personagem", personagem5.nome , "foi adicionado!")
}
adicionarPersonagem()
// aq removemos o personagem no indice 2 e colocamos 1,2 por que ele ira retirar 1 no indice 2
let remover = arrayPersonagens.splice(1,2)
console.log(remover)
// função para listar os personagens
function listarPersonagens() {
    console.log("lista de personagens:");

    for (let i = 0; i < arrayPersonagens.length; i++) {
        console.log(arrayPersonagens[i].nome);
    }
}

listarPersonagens() // mostra seus status usando função e for 
function verificarStatus(nomeBuscado) {
    let encontrou = false

    for (let i = 0; i < arrayPersonagens.length; i++) {

        

            console.log("status dos personagens:")
            console.log("Nome: " + arrayPersonagens[i].nome)
            console.log("hp: " + arrayPersonagens[i].hp)
            console.log("Habilidades:")

            // mostra suas habilidades disponiveis
            for (let j = 0; j < arrayPersonagens[i].habilidades.length; j++) {
                console.log("- " + arrayPersonagens[i].habilidades[j])
            }

            encontrou = true
        }
    }


verificarStatus()