var dieRoll = Math.ceil(Math.random() * 6);

switch (dieRoll) {
    case 1:
        console.log('You roll a 1.');
        break;
    case 2:
        console.log('You roll a 2.');
        break;
    case 3:
        console.log('You roll a 3.');
        break;    
    case 4:
        console.log('You roll a 4.');
        break;
    case 5:
        console.log('You roll a 5.');
        break;
    case 6:
        console.log('You roll a 6.');
        break;
    default:
        console.log('This die only has 6 sides man...');
        break;
}