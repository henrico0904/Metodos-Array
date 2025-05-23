//modificar o array com letras maiusculas
let playlist = ['funk', 'hip-hop', 'pop'];
console.log(`playlist normal: ${playlist}`)

let playlistEmCaps = playlist.map(musica => musica.toUpperCase());
console.log(`playlist em maiúsculas: ${playlistEmCaps}`)

//clonando o array

let clone = playlist.map(item =>item);
console.log(`clonagem com map(): ${clone.join(`, `)}`)

//transformar em minusculo
let playlist1 = ['FUNK', 'HIP-HOP', 'POP'];
let minuscula = playlist1.map(item => item.toLowerCase())

console.log(`minusculas com map(): ${minuscula}`)


//com números
let numeros = [10, 20, 30, 40, 50]
let dobrados = numeros.map(n => n * 2)
console.log(`valores dobrados: ${dobrados.join(`, `)}`)


let metade = numeros.map(n => n / 2)
console.log(`valores pela metade: ${metade.join(`, `)}`)


let comoTexto = numeros.map(n => `${n} pts`)
console.log(`como texto: ${comoTexto.join(`, `)}`)