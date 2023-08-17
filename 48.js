var filmCharacters = [
    ['Vito', 'Michael', 'Sonny', 'Freddo'],
    ['Mia', 'Vincent', 'Jules', 'Butch'],
    ['Bella', 'Edward', 'Jacob', 'Carlisle'],
    ['James', 'M', 'Moneypenny', 'Felix']
];

for (var i = 0; i < filmCharacters.length; i++) {
for (var c = 0; c < filmCharacters[i].length; c ++) {
if (filmCharacters[i][c].startsWith('M')) {
    console.log (filmCharacters[i][c]);
}
}
}

