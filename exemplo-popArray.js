//exemplo de método de pop (tirar o ultimo objeto do array)
let playlist = ["hiphop", "rap", "trap"]
playlist.push('sertanejo')

let musicaRemovida = playlist.pop()

console.log(`depois do pop ${playlist}`)
console.log(`musica removida ${musicaRemovida}`)

let segundaMusicaRemovida = playlist.pop()

console.log(`depois do segundo pop ${playlist}`)
console.log(`a musica removida foi ${segundaMusicaRemovida}`)
