var correctGuesses = 0;
var password = 4;
while (correctGuesses < 4){
    var guess = Math.ceil (Math.random()*3);
    if (guess === 1){
        correctGuesses ++;
        console.log('Found ' + correctGuesses + ' characters');
    }
    else if (guess === 2){
        correctGuesses = 0;
        console.log('Starting over');
    }
    else if (guess === 3){
        correctGuesses = correctGuesses;
    }
}
if (correctGuesses === password){
    console.log('Terminal hacked!');
}