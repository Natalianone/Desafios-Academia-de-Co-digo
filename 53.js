function extractPassword (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var c = array[i];
        if ('a' <= c && c <= 'z' || 'A' <= c && c <= 'Z' || '0' <= c && c <= '9'){
                    newArray.push(c);
                }
    }
return newArray.join('');
}
    