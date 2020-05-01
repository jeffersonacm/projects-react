const calc = require('./calc');

describe("calc", () => {
    it('sum', () => {
        const n1 = 1;
        const n2 = 1;

        expect(calc.sum(n1, n2)).toBe(2);
        expect(calc.sum(n1, n2)).not.toBe(3);
    })

    it('sub', () => {
        const n1 = 1;
        const n2 = 1;

        expect(calc.sub(n1, n2)).toBe(0);
        expect(calc.sub(n1, n2)).not.toBe(1);
    })

    it('mult', () => {
        const n1 = 2;
        const n2 = 2;

        expect(calc.mult(n1, n2)).toBe(4);
        expect(calc.mult(n1, n2)).not.toBe(1);
    })

    it('div', () => {
        const n1 = 4;
        const n2 = 2;

        expect(calc.div(n1, n2)).toBe(2);
        expect(calc.div(n1, n2)).not.toBe(1);
    })

    it('div by zero', () => {
        const n1 = 4;
        const n2 = 0;

        expect(calc.div(n1, n2)).toBe(0);
        expect(calc.div(n1, n2)).not.toBe(1);
    })
})