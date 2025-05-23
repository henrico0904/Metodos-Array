//modificar o array com letras maiusculas
let playlist = ['funk', 'hip-hop', 'pop'];
console.log(`playlist normal: ${playlist}`)

let playlistEmCaps = playlist.map(musica => musica.toUpperCase());
console.log(`playlist em maiúsculas: ${playlistEmCaps}`)

//clonando o array

let clone = playlist.map(item =>item);
console.log(`clonagem com map(): ${clone.join(`, `)}`)
