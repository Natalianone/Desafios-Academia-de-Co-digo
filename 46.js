var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
var newDisk = [];
var corruptionSymbol = 'ø';

for (var i = 0; i < targetDisk.length; i++) {
    if (targetDisk[i] !== corruptionSymbol) {
        newDisk.push(targetDisk[i]);
    }
}
var disk = newDisk.join('');
console.log (disk);