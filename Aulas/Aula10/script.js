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
console.log(novaFrase)*/

//Exercicio 2

const escrevaFrase = prompt ("Escreva uma frase:")
const fraseMaiuscula = escrevaFrase.toUpperCase()
const novaFrase = escrevaFrase.replaceAll("o", "i")
console.log(fraseMaiuscula)
console.log(novaFrase)
console.log(escrevaFrase.length)

