var target = Math.ceil(Math.random() * 10);
var guess;
var tries = 5;

console.log(target);
console.log(tries);

while (tries > 0 ){
    guess = Math.ceil(Math.random() * 10);
    console.log(guess);
    tries--;
    
    if (guess === target) {
        console.log("Uhuuuuuul" + guess);
        break;
    }
}