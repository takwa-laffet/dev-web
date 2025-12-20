import { useEffect, useState } from "react";
import {weatherApi} from "./api/weatherapi";
function Home(){
        const [city,setCity]=useState("");
        const [weather,setWeather]=useState(null);
        const [err,seterr]=useState("");

    const submittest=async (e)=>{
        console.log("form submitted");
        console.log(city);
        console.log(weatherApi(city));
        e.preventDefault();

        if(city){
          const weather = await weatherApi(city);
            setWeather(weather);
        }
        else{
            seterr("Veuillez entrer une ville");
        }
        
    }
    return (
        <div>
            <h1>Météo a {city}</h1>
        <form>
            <input type="text" placeholder="entrer une ville"
            onChange={(e)=>setCity(e.target.value)}/>
            <button type="submit" onClick={submittest}>Rechercher</button>
        </form>
        {err && <p style={{color:"red"}}>{err}</p>
        }
        {weather && (<div style={{marginTop:"20px",border:"1px solid #000000ff",padding:"10px"}}> 
            <h2>Météo à {weather.name}</h2>{/*  <span>{weather.weather[0].icon}</span> */}
            <p>Température: {weather.main.temp} °C</p>
            <p>Conditions: {weather.weather[0].description}</p>
            <p>Humidité: {weather.main.humidity}%</p>
            <p>Pression: {weather.main.pressure}</p>
        </div>
        )}
    </div>
    );
}
export default Home;