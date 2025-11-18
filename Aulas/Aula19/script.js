/*let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
matriz[1][2] = 1

console.log(matriz)*/

let matriz1 = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
let soma = 0
// loop que percorre a linha, matriz.length retorna 3
for (let i = 0; i < matriz1.length ; i++) {
    //i cada linha    j cada coluna
for (let j = 0; j < matriz1[i].length ; j++) {
soma += matriz1[i][j]
}
}
console.log("A soma dos valores da matriz é igual é:", soma)


let matriz2 = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]
]
let soma2 = 0
// loop que percorre a linha, matriz.length retorna 3
for (let i = 0; i < matriz2.length ; i++) {
    //i cada linha    j cada coluna
for (let j = 0; j < matriz2[i].length ; j++) {
soma2 += matriz2[i][j]
}
}
console.log("A soma dos valores da matriz é igual é:", soma2)