var xMen = ['Professor X', 'Cyclops', 'Beast', 'Iron-Man', 'Hobgoblin'];
var freelancers = ['Legion', 'Magneto'];


xMen.pop ();
xMen.pop ();

for (var i = 0; i < xMen.length; i++) { 
        freelancers.push(xMen[i]); }

console.log (xMen);
console.log (freelancers);