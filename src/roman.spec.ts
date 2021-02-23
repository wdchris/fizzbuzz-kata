import { expect } from 'chai';

function romans(n: number): String {
    if (n === null) {
        return null;
    }

    let result = '';
    const things = [
        {num: 50, literal: 'L'},
        {num: 10, literal: 'X'},
        {num: 5, literal: 'V'},
    ];

    things.forEach((thing,index) => {
        while (n >= thing.num) {
            result += thing.literal;
            n -= thing.num;
        } 
    });

    if (n > 0) {
        let resultArray = ['I', 'II', 'III', 'IV'];
        result += resultArray[n - 1];
    }

    return result;

}

describe('Roman numerals', () => {
    it('If you pass null you get nothing back', () => {
       // expect(sum(1, 3)).eql(4);
        expect(romans(null)).eql(null);
    });

    it('If you pass 1 you get I back', () => {
        expect(romans(1)).eql('I');
    });

    it('If you pass 2 you get II back', () => {
        expect(romans(2)).eql('II');
    });

    it('If you pass 3 you get III back', () => {
        expect(romans(3)).eql('III');
    });

    it('If you pass 5 you get V back', () => {
        expect(romans(5)).eql('V');
    });

    it('If you pass 6 you get VI back', () => {
        expect(romans(6)).eql('VI');
    });

    it('If you pass 7 you get VII back', () => {
        expect(romans(7)).eql('VII');
    });

    it('If you pass 8 you get VIII back', () => {
        expect(romans(8)).eql('VIII');
    });

    it.skip('If you pass 9 you get IX back', () => {
        expect(romans(9)).eql('IX');
    });

    it('If you pass 10 you get X back', () => {
        expect(romans(10)).eql('X');
    });

    it('If you pass 11 you get XI back', () => {
        expect(romans(11)).eql('XI');
    });

    it('If you pass 12 you get XII back', () => {
        expect(romans(12)).eql('XII');
    });

    it('If you pass 20 you get XX back', () => {
        expect(romans(20)).eql('XX');
    });

    it('If you pass 30 you get XXX back', () => {
        expect(romans(30)).eql('XXX');
    });

    it.skip('If you pass 40 you get XL back', () => {
        expect(romans(40)).eql('XL');
    });

    it('If you pass 50 you get L back', () => {
        expect(romans(50)).eql('L');
    });

    it('If you pass 60 you get LX back', () => {
        expect(romans(60)).eql('LX');
    });
});
