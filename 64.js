const add = function (operand1, operand2) {
    return operand1 + operand2;
};

const multiply = function (operand1, operand2) {
    return operand1 * operand2;
};

const calculate = function (operand1, operand2, operation) {
    const result = operation(operand1, operand2); 
    console.log(result);
};
calculate(1,2, add);
calculate(5,3, multiply);