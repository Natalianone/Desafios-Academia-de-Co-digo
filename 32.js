var target = Math.floor(Math.random() * 11);
var guess = Math.floor(Math.random() * 11);

console.log(target);

while (guess !== target){
    guess = Math.floor(Math.random() * 11);
    console.log (guess);
    
    if (guess === target) {
        console.log ("You've won");
    } else {
        console.log ('Try again');
    }
}
  /*  
    console.log('Not eleven! Try again');
    target = Math.floor(Math.random() * 11);
}
//console.log("Yay! You've done it!");*/