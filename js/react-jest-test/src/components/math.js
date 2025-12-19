export const add =(a,b)=>{
    return a + b;
}
export const division=(a,b)=>{
    if(b===0){throw new Error("tu ne peux pas diviser par zero");}
return a / b;
}