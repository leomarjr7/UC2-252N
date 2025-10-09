//aspas duplas

/*const nome = "Leomar"
const idade = 17
const frase = "Olá, meu nome é " + nome + " e tenho " + idade + " anos"
console.log(frase)
console.log(typeof frase)

//aspas simples

const nome = 'Leomar'
const idade = 17
const frase = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos'
console.log(frase)
console.log(typeof frase)

//template

const nome = "Leomar"
const idade = 17
const frase = `Olá, meu nome é ${ nome} e tenho ${ idade} anos`
console.log(frase)
console.log(typeof frase)

//Exercicio 1

const seuNome = prompt("Qual é seu nome?")
const suaCor = prompt("Qual é a sua cor favorita?")
const frase = "Olá, meu nome é " + seuNome + " e minha cor favorita é " + suaCor
console.log(frase)
console.log(typeof frase)

const seuNome = "Leomar"
const suaCor = "Verde"
const frase = `Olá, meu nome é ${seuNome}  e minha cor favorita é ${suaCor}`
console.log(frase)
console.log(typeof frase)

// lenght  -  A propriedade length nos diz qual é o tamanho de uma string, incluindo espaços.

const nome = "Leomar Gilberto da Silva Junior"
console.log(nome.length)
console.log(typeof nome)

// toLowerCase()  -   O método toLowerCase() transforma todas as letras da sua string em minúsculas

const fraseMaiuscula = "OieEeEee!"
const fraseMinuscula = fraseMaiuscula.toLowerCase()
console.log(fraseMaiuscula , fraseMinuscula)

//toUpperCase()   -   O método toUpperCase() transforma todas as letras da sua string em maiúsculas.

const fraseMaiuscula = fraseInicial.toUpperCase()
console.log(fraseInicial, fraseMaiuscula)
console.log(nome)
console.log(typeof nome)

//O método trim() retira os espaços que existem antes e depois da sua string.
console.log(nome.trim())*/

/*O método includes(caracteres) determina se um conjunto de caracteres pode ser
encontrado dentro de outra string, retornando true ou false.

const fraseCenoura = "Hoje comi cenoura"
console.log(fraseCenoura.includes("cenoura"))
console.log(fraseCenoura.includes("batata"))

/*O método replaceAll(chars1, chars2) troca todas as ocorrências de um conjunto
de caracteres (chars1) por alguma outra coisa (chars2)*/

/*const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase)

//Exercicio 2

const escrevaFrase = prompt ("Escreva uma frase:")
const fraseMaiuscula = escrevaFrase.toUpperCase()
const novaFrase = escrevaFrase.replaceAll("o", "i")
console.log(fraseMaiuscula)
console.log(novaFrase)
console.log(escrevaFrase.length)*/

/*const listaCompras = ["Abacate", "Banana", "Tomate"]
console.log(listaCompras[0])

const racasCachorros = ["Yorkshire", "Pitbull", "Pastor Alemão", "Labrador", "Bulldog"]
const escolhaNumero = prompt("Escolha um número de 0 a 4")
console.log(racasCachorros[escolhaNumero])

const pokemon = ["bulbasauro", "squirtle", "charmander"]
const escolhaNumero2 = prompt("Escolha um número de 0 a 4")
console.log(pokemon[escolhaNumero2].length)


/*O método includes(elemento) determina se um array contém um determinado
elemento, retornando true ou false*/

/*const comidasFavoritas = ["Pizza","Sushi","Churrasco","Lasanha"]
console.log(comidasFavoritas.includes("Sushi"), comidasFavoritas.includes("Feijão"))


//O método push(elemento) adiciona um ou mais elementos ao final de um array

const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)
numeros.push(5,6,7)
console.log(numeros)

//O método pop() remove o último elemento de um array

const meusPeixes=["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes)
meusPeixes.pop()
console.log(meusPeixes)

//

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
letras.splice(3, 2) 
console.log(letras)

const numeros = ["1", "2", "3", "4", "5", "6"]
console.log(numeros.length)
numeros.push("7")
numeros.splice(3, 2) 
console.log(numeros)


let array
console.log("a.", array) // undefined


array = null
console.log("b.", array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log("c.", array.length) // 11

let i = 0
console.log("d.", array[i]) // 3

array[i+1] = 19
console.log("e.", array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log("f.", valor)//9   


//Exercicio 3

const frase = prompt("Digite uma frase:")
console.log(frase.toUpperCase().replaceAll("A","I"), frase.length)


//Exercicio 4

const nomeUsuario = prompt("Qual é o seu nome?")
const emailUsuario = prompt("Qual é o seu e-mail?")
const frase1 = `Olá, ${ nomeUsuario }! O e-mail ${ emailUsuario } foi cadastrado com sucesso. Seja bem-vinda(o)!`
console.log(frase1)

//Exercicio 5

const qualComida = prompt("Qual é a sua comida preferida?")
const frase3 = ("Essas são as minhas comidas preferidas: ")
let comidasFavoritas = ["Sushi", "Pizza", "Churrasco", "Hamburguer", "Açaí"]
comidasFavoritas[1] = qualComida
console.log(frase3)
console.log(qualComida)
console.log(comidasFavoritas)


//Exercicio 6

const listaDeTarefas = []
let tarefasDia1 = prompt("Me diga uma tarefa para realizar no dia de hoje")
let tarefasDia2 = prompt("Me diga uma tarefa para realizar no dia de hoje")
let tarefasDia3 = prompt("Me diga uma tarefa para realizar no dia de hoje")
listaDeTarefas.push(tarefasDia1, tarefasDia2, tarefasDia3)
console.log(listaDeTarefas)

const indice = prompt("Digite o indice da tarefa que ja realizou(0, 1, 2)")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)*/

//Exercicio 7

let frutas = ["Banana", "Mamão", "Abacaxi", "Limão", "Kiwi"]
let ondeTemAbacaxi = frutas.indexOf("Abacaxi")
let tamanhoArray = frutas.length
console.log("Onde está o abacaxi:", ondeTemAbacaxi)
console.log(frutas.length)
