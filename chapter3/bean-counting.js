//bean counting

const countBs = (evalString) => countChar(evalString, 'B');

const countChar = (evalString, char) => {
    let charCount = 0;

    for (const c of evalString) {
        if (c === char) charCount++;
    }

    return charCount;
}

console.log(countBs('BBCb'));
console.log(countChar("kakkerlak", "k"));