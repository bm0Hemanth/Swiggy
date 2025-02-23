import { sum } from "../sum";

test("sum to add ",()=>{
    const result =sum(2 , 3);
    expect(result).toBe(5); 
});