var counter = 0;
var incrementCounterBy = function (amount) {
    counter += amount;
}
var resetCounter = function(){
    counter = 0;
}
console.log(counter);

incrementCounterBy(2);
console.log(counter);

resetCounter();
console.log(counter);