import {add} from './math';
import { division } from './math';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
test('division of 6 by 2 to equal 3', () => {
    expect(()=>division(4,0)).toThrow("tu ne peux pas diviser par zero");});
test("egalite entre 2 objet",()=>{
    const add1 =add(1,2);
    const add2 =add(1,2);
    expect(add1).toEqual(add2);
})
beforeEach(()=>{
    console.log("-----------------------------------");
});
afterEach(()=>{
    console.log("-----------------------------------");
});