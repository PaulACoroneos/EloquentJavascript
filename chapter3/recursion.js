//recursion

const isEven = (num) => {
    const evalNum = Math.abs(num - 2);
    if (evalNum > 1) return isEven(evalNum);
    return evalNum === 1 ? false : true;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));