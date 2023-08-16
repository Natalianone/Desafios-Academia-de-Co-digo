/*numAleatorio 1-10
permite que o usuario adivinhe um numero 
print uma mensagem quando
print do numero chutado e informa se foi acima ou abaixo
if (chute === valor)
console.log (acertou);
else 
try again*/


/*var numAleatorio; 
numAleatorio = Math.ceil(Math.random ()* 10)
console.log (numAleatorio);*/

//ordem importa no array / tem mais metodos, bom para trabalhar com listas
var sucessoEntrevista;
sucessoEntrevista = [
    'mantenho a calma',
    'tenho metodologia',
    'pratico exercicios',
];

for (i = 0 ; i < sucessoEntrevista.length ; i++) {
    sucessoEntrevista [0][1] = ('SOU GRANDE PORQUE ' + sucessoEntrevista [0][1]);
}
console.log (sucessoEntrevista.slice(1,2)); 

//ordem nao importa
var manterCalma;
manterCalma = {
    como: 'Estudar e ser autentica',
    onde: 'na entrevista',
    porque: 'para poder passat tudo que sei',

};

console.log (manterCalma);


