const mypromise = new Promise((resolve,reject)=>{
    //resolve le api est ok
    //reject le api est pas ok
    //code 
    const nbr=3;
    if (nbr>0){
        resolve(nbr);
    }else{
        reject("error");
    }
});
// async /await
export const f1=async ()=>{
    try{
    const result= await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=395b727069ff007299983e9d226ab194");
    const data =await result.json();
    console.log(data);

    }catch(error){
        console.log(error);
    }
}
