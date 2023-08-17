var filmCharacters = [
    ['Vito', 'Michael', 'Sonny', 'Freddo'],
    ['Mia', 'Vincent', 'Jules', 'Butch'],
    ['Bella', 'Edward', 'Jacob', 'Carlisle'],
    ['James', 'M', 'Moneypenny', 'Felix']
];

console.log (filmCharacters[0][1]);
console.log (filmCharacters[1][0]);
console.log (filmCharacters[3][1]);
console.log (filmCharacters[3][2]);

/* Imprimir nomes que começam com M

for (var i= 0; i < filmCharacters.length; i++) {
for (var c = 0; c < filmCharacters[i].length ; c++) {
var character = filmCharacters[i][c];
if (character[0] === 'M') {
    console.log (character);
}
}
}*/