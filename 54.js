function getValidPassword(loggedPasscodes) {
    for (let i = 0; i < loggedPasscodes.length; i++) {
        let isValid = true;
        for (let j = 0; j < loggedPasscodes[i].length; j++) {
            if (loggedPasscodes[i][j] % 2 !== 0) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            return loggedPasscodes[i];
        }
    }
    return null;
}

var loggedPasscodes = [
	[1, 4, 4, 2],
    [1, 2, 3, 1],
    [2, 2, 2, 1],
    [5, 5, 5, 5],
    [4, 3, 4, 3],
    [4, 1, 4, 8],
    [2, 6, 0, 8],
    [6, 2, 8, 1]
];

var validPassword = getValidPassword (loggedPasscodes);
