/*const aluno = {
    nome: "Leomar",
    idade: 17,
    email: "leomar@gmail.com"
}
console.log(aluno.nome)
console.log(aluno["idade"])
console.log(aluno.email)

const laptop = {
    tela : 15, 
    processador : "Ryzen",
    marca : "Lenovo",
    modelo : "K14"
}
console.log("A marca do laptop é:", laptop.marca)*/

const filme = {
    elenco : ["Johnny Depp", "Orlando Bloom", "Keira Knightley"], 
    nome : "Piratas do Caribe",
    jaViu : "Sim",
    ano : "2003",
    direcao : "Gore Verbinski",
}
console.log("O filme é:", filme.nome)
console.log("O tema do filme é:", filme["tema"])
console.log("O diretor do filme é:", filme.direcao)
console.log("O elenco do filme é:", filme.elenco)

const pessoa = {
    nome : "Leomar",
    idade : "17 anos",
    genero: "Jazz",
}
console.log("O nome da pessoa é:", pessoa.nome)
console.log("A idade da pessoa é:", pessoa.idade)
console.log("O gênero musical favorito da pessoa é:", pessoa.genero)
console.log("O nome da pessoa é", pessoa.nome, "ele tem", pessoa.idade, "e gosta muito de", pessoa.genero)


const professores = [
    {nome: "Lucas", modulo: "2"},
    {nome: "Dal", modulo: "1"},
    {nome: "Valter", modulo: "1"}
]
console.log("O professor", professores[0].nome, "deu o módulo:", professores[0].modulo)
console.log("A professora", professores[1].nome, "deu o módulo:", professores[1].modulo)
console.log("O professor", professores[2].nome, "deu o módulo:", professores[2].modulo)


const elenco = {
    elenco : [
        {nome: "Xuxa"},
        {nome: "Johnny Depp", personagem: "Jack Sparrow"} ,
        {nome: "Orlando Bloom", personagem: "Will Turner"}
        
    ],
    filme : "Piratas do Caribe",
    jaViu : "Sim",
    ano : "2003",
    direcao : "Gore Verbinski",
}
console.log("O filme é:", elenco.filme)
console.log("O tema do filme é:", elenco["tema"])
console.log("O diretor do filme é:", elenco.direcao)
console.log("O elenco do filme é:", elenco.elenco[0])


const amigo = {
    nome : "Vágner",
    idade : "17 anos",
    comidas :
       ["pizza",
       "sorvete" ,
       "churrasco"],
    melhorAmigo : "Deus",
idadeMelhorAmigo : "Eterna"
    
    }
    
console.log("O nome da pessoa é", amigo.nome, "ele tem", amigo.idade, "e suas comidas favoritas são", amigo.comidas[0], ",", amigo.comidas[1], "e", amigo.comidas[2])
console.log("Seu melhor amigo se chama", amigo.melhorAmigo, "e sua idade é", amigo.idadeMelhorAmigo)


const personagensNaruto = [
{personagem: "Sasuke Uchiha", 
idade: "17", 
estilo: "Ninjutsu", 
jutsus: ["Chidori", "Amaterasu" , "Susanoo"], 
poderes: ["Sharingan", "Rinnegan"]},
{personagem: "Naruto", 
idade: "17", 
estilo: "Ninjutsu", 
jutsus: ["Rasengan", "Mil clones da sombra" , "Harém"], 
poderes: ["Kurama", "Modo Sábio"]},
{personagem: "Itachi", 
idade: "21", 
estilo: "Genjutsu", 
jutsus: ["Tsukoyomi", "Amaterasu" , "Susanoo"], 
poderes: ["Mangekyo Sharingan", "Inteligência"]},
]
const personagem = {
    nome : "Obito",
idade : "25",
estilo : "Ninjutsu",
jutsus : ["Kamui", "Bola de fogo"],
poderes : ["Sharingan", "Rinnegan"]}

function adicionarPersonagem() {
    naruto.push(personagem)
    console.log("O personagem", personagem.nome , "foi adicionado!")
}
adicionarPersonagem()

function buscarPersonagem(nomeBuscado) {
    function personagem(personagem){
        return personagem.nome.toLowerCase() === nomeBuscado.toLowerCase()
    }
    const personagemEncontrado = personagensNaruto.find(personagem)
    
}
buscarPersonagem()