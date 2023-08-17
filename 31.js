var weeklyPass = 'darlene';
var weekDay = 'tues';
var currentPass;

switch (weekDay) {
    case 'monday':
        currentPass = weeklyPass + 'mnd';
        break;
    case 'tuesday':
        currentPass = weeklyPass + 'tsd';
        break;
    case 'wednesday':
        currentPass = weeklyPass + 'wdnsd';
        break;
    case 'thursday':
        currentPass = weeklyPass + 'thrsd';
        break;
    case 'friday':
        currentPass = weeklyPass + 'frd';
        break;
    case 'saturday':
        currentPass = weeklyPass + 'strd'
        break;
    case 'sunday':
        currentPass = weeklyPass + 'snd';
        break;
     
}
console.log(currentPass);