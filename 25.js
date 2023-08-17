var chocolate;
var strawberry;
var stracciatella;
var caramel;

var iceCream = (strawberry && chocolate) || (strawberry && stracciatella) || ! caramel;
console.log (iceCream);