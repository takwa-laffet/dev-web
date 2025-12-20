import axios from 'axios';
const API_KEY="395b727069ff007299983e9d226ab194";
const Api_Url="https://api.openweathermap.org/data/2.5/weather";
export const weatherApi= async (city)=>{
try{
    const response=await axios.get(`${Api_Url}`,{
        params:{
            q:city,
            appid:API_KEY,
            units:"metric",
            lang:"fr"
        }
    });
   console.log(response);
    return response.data;
}catch(error){
    console.error("Erreur lors de la récupération des données météo:",error);
    throw error;
}
};