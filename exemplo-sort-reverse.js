//sort - ordena os elementos do array
let playlist = ['funk', 'hip-hop', 'pop', 'rock', 'jazz'];
let playlistOrdenada = playlist.sort()

console.log(`playlist ordenada: ${playlistOrdenada}`)

//reverse - inverte a ordem dos elemntos do array
let playlistInvertida = playlist.reverse()
console.log(`playlist invertida: ${playlistInvertida}`)


//sort com números
let numeros = [10, 5, 100, 50,1]
console.log(`antes do sort: ${numeros}`)

//de forma crescente
let numerosOrdenadosCrescente = numeros.sort((a, b) => a - b)
console.log(`numeros em ordem crescente: ${numerosOrdenadosCrescente}`)

//de forma decrescente
let numerosOrdenadosDecrescente = numeros.sort((a, b) => b - a)
console.log(`numeros em ordem descrescente: ${numerosOrdenadosDecrescente}`)
