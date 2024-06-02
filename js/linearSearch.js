const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    // Release 0
    let answer = ''

    for (let i = 0; i < arrayToSearchThrough.length; i ++) {
        if (arrayToSearchThrough[i] == valueToFind) {
            if (!answer) {
                answer = i
            }
        }
    }
    if (answer) {
        return answer
    } else {
        return undefined
    }
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let answer = []

    for (let i = 0; i < arrayToSearchThrough.length; i ++) {
        if (arrayToSearchThrough[i] == valueToFind) {
            answer.push(i)
        }
    }
    return answer
}
