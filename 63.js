var add = function(operand1, operand2) {
    return operand1 + operand2;
};

var calculate = function (operand1, operand2, operation) {
    const result = operation(operand1, operand2);
    console.log(result);
    
};

calculate(5, 3, add);