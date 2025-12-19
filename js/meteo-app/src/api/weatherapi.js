export const weatherApi=async function(){
   const apiKey=process.env.API_KEY;
    const apiUrl=process.env.Api_Url;
    const city="Tunis";
    try{
    const response= await fetch(`${apiUrl}/weather?q=${city}&appid=${apiKey}&units=metric`);
    
if(response.ok){
    const data=await response.json();
    return data;
}
else{
    console.log("HTTP-Error:",response.status);
}
}
    catch(error){
        console.log("Error fetching weather data:",error);
    }

    
}