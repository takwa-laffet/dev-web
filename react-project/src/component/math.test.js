import sum from "./math";
test("test addition function",()=>{
    expect(sum(4,7)).toBe(11);
})