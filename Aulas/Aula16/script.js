const soma = function( ) {
    const num1 = 5
    const num2 = 6
    const resultado = num1 + num2
console.log("A soma é:", resultado)
}
soma()

const oDobro = ( ) => {
    let dobrinho = 20 * 2
    console.log("O dobro de 20 é:", dobrinho)
}
oDobro()

const determinaMonstro = function(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue, temPelo) {
    if (transformaComLuaCheia && temPelo) {
        console.log("É um Lobisomem")
    } else if (temPeleGelada && brilhaAoSol && temSedeDeSangue) {
        console.log("É um Vampiro")
} else {
        console.log("É um Humano")
    } 
}
determinaMonstro(true, false, true, true, false)