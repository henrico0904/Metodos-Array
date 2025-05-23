let playlist = ["hiphop", "rap", "trap"]
console.log(`antes do push: ${playlist}`);

//adcionando uma nova música á playlist
playlist.push('sertanejo')

console.log(`depois do push: ${playlist}`)

playlist.push('lofi')
console.log(`depois do push: ${playlist}`)


//exemplo de método de pop (tirar o ultimo objeto do array)

let musicaRemovida = playlist.pop()

console.log(`depois do pop ${playlist}`)
console.log(`musica removida ${musicaRemovida}`)

let segundaMusicaRemovida = playlist.pop()

console.log(`depois do segundo pop ${playlist}`)
console.log(`a musica removida foi ${segundaMusicaRemovida}`)

