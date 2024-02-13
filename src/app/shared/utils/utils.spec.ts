import { pluck } from "./utils";

// Utility testing 

describe('utils', () => {
    describe('pluck', () => {
        it('pluck item', ()=> {
            expect(pluck([{id:1, name: 'Rohit'}], 'id')).toEqual([1])
        })
    })
});
