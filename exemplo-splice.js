let playlist = ['funk', 'hip-hop', 'pop', 'rock', 'jazz']
console.log(`antes do splice: ${playlist}`)

//remover 2 elementos a partir do indice 2
let elementosRemovidos = playlist.splice(2, 2)

console.log(`depois do splice ${playlist}`)
console.log(`elementos removidos: ${elementosRemovidos}`)