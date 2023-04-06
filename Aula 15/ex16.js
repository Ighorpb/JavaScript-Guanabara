//let num = [5, 8, 4]
//num [3] = 6
//num.push(7) // Adicionar '7' no final do array
// num.length   Ver quantos elementos tem nos arrays
// num.sort() Coloca os vetores em ordem de maior para menos

// console.log(`A ordem correta dos vetores é de ${num.sort()}`)

var valores = [8, 1, 7, 4, 2, 9]

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// for (let pos in valores) {
//     valores.sort()
//     console.log(valores [pos])
// }

// num.indexOF(7) -> Vai retornar a valor solicitado em forma de array

let pos = valores.indexOf(5)
console.log(`O valor está na posição ${pos}`)