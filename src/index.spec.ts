import { expect } from 'chai';

function sum(a: number, b: number): number {
    return a + b;
}

function fizzbuzz(a: number): string {
    if (a % 3 === 0) {
        return "Fizz";
    }

    return a.toString();
}

describe('sample test-suite', () => {
    it('sum 1 + 3 should be 4', () => {
        expect(sum(1, 3)).eql(4);
    });
});

describe('fizzbuzz kata tests', () => {
    it('should return a string of number 1', () => {
        expect(fizzbuzz(1)).eql("1");
    });
});

describe('fizzbuzz kata tests', () => {
    it('should return a string of number 3', () => {
        expect(fizzbuzz(3)).eql("Fizz");
    });
});
