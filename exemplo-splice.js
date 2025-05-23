let playlist = ['funk', 'hip-hop', 'pop', 'rock', 'jazz', 'hino']
console.log(`antes do splice: ${playlist}`)

//remover 2 elementos a partir do indice 2
let elementosRemovidos = playlist.splice(2, 2)
let desafio = playlist.splice(2, 3)

console.log(`depois do splice ${playlist}`)
console.log(`elementos removidos: ${elementosRemovidos}`)
console.log(`elementos removidos: ${desafio}`)
