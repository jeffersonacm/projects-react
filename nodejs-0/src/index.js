'use strict'

const fibonacci = () => {
    var arrFibo = [];

    arrFibo[0] = 0;
    arrFibo[1] = 1;
    arrFibo[2] = 1;

    for (let i = 3; i < 15; i++) {
        arrFibo[i] = arrFibo[i-1] + arrFibo[i-2];
    }

    return arrFibo;
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
