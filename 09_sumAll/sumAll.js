const sumAll = function(a, b) {
    let sum = 0;

    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }

    if (a > b) {
        for(let i = b; i <= a; i++) {
            sum += i;
        }
    }
    else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }
    else {
        sum = a;
    }

    return sum;
};

//console.log(sumAll(9, 2.8));

// Do not edit below this line
module.exports = sumAll;
