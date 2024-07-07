import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import clear_icon from '../assets/clear.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'


const Weather = () => {

    const search = async (city)=>{
      try {
        const url = `http://api.weatherapi.com/v1/current.json?key=${VITE_APP_ID}&q=&{city}&aqi=no`
                  // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
      
      } catch (error) {
        
      }
    }

    useEffect(()=>{
      search('London')
    },[])



  return (
    <div className='weather'>
       <div className='search-bar'>
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="" />
        </div> 
        <img src={clear_icon} alt="" className='weather-icon' />
        <p className='temprature'>12 C</p>
        <p className='location'>Mumbai </p>
        <div className="weather-data"></div>

        <div className="col">
          <img src={humidity} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind} alt="" />
          <div>
            <p>4.2 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
    </div>
  )
}

export default Weather
