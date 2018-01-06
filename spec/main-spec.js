const main = require('../main/main');

describe('main()', () => {
    it('return 4A0B',()=>{
        let giveAnswer=[1,2,3,4];
        let input=[1,2,3,4];
        let result = main(input,giveAnswer);
        let expectResult="4A0B";
        expect(result).toEqual(expectResult);
    });
    it('return 2A2B',()=>{
        let giveAnswer=[1,2,3,4];
        let input=[1,2,4,3];
        let result = main(input,giveAnswer);
        let expectResult="2A2B";
        expect(result).toEqual(expectResult);
    });
    it('return 2A2B',()=>{
        let giveAnswer=[1,2,3,4];
        let input=[1,3,2,4];
        let result = main(input,giveAnswer);
        let expectResult="2A2B";
        expect(result).toEqual(expectResult);
    });
    it('return 1A3B',()=>{
        let giveAnswer=[1,2,3,4];
        let input=[1,3,4,2];
        let result = main(input,giveAnswer);
        let expectResult="1A3B";
        expect(result).toEqual(expectResult);
    });
    it('return 2A2B',()=>{
        let giveAnswer=[1,2,3,4];
        let input=[2,1,3,4];
        let result = main(input,giveAnswer);
        let expectResult="2A2B";
        expect(result).toEqual(expectResult);
    });
    it('return 0A4B',()=>{
        let giveAnswer=[1,2,3,4];
        let input=[2,1,4,3];
        let result = main(input,giveAnswer);
        let expectResult="0A4B";
        expect(result).toEqual(expectResult);
    });
    it('return 0A4B',()=>{
        let giveAnswer=[1,2,3,4];
        let input=[2,3,4,1];
        let result = main(input,giveAnswer);
        let expectResult="0A4B";
        expect(result).toEqual(expectResult);
    });
    

});
