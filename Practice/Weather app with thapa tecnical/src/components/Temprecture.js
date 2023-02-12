import React, { useState, useEffect} from 'react';
import './style/style.css';

const Temprecture = () => {
    const [serch, setSerch] = useState('');
    const [city, setCity] = useState(null);
    const[tempC, setTempC] = useState(null);
    const[tempF, setTempF] = useState(null);
    useEffect(  () =>{
        const fetchApi = async () =>{
            const url = `http://api.weatherapi.com/v1/current.json?key=a7a6975ed7b14d0f85e124408222408&q=${serch}&aqi=no`
            const responce = await fetch(url);

            const resJson = await responce.json();
          setCity(resJson);
          setTempC(resJson.current.temp_c);
          setTempF(resJson.current.temp_f);
            console.log(resJson.current.temp_c);
        }
        fetchApi();
    },[serch]);//the page is loded when setSerch is called...

    return (
        <div className='box'>
            <div className="inputData">
                <input onChange={(event)=>setSerch(event.target.value)} value={serch} type="serch" placeholder='Enter City Name' className='inputFeild' />
            </div>

            <div className="info ">
                <h2 className='location text-center'><i className="fa-solid fa-street-view">{serch}</i>
                </h2>

                {/* <h1>{city.resJson.current.temp_c}</h1> */}

                <h1 className="temp my-5">
                <strong>Temprecture:</strong> <span className='text-danger'>{tempC}°C</span> And <span className='text-danger'>{tempF} °F</span> 
                </h1>

                <h3 className='tempmin_max text-center' >Temp in Cel.{tempC} deg. cel ~ Temp Fer {tempF} deg. cel</h3>

                <div className="wave1 -one"></div>
                <div className="wave2 -two"></div>
                <div className="wave3 -three"></div>
            </div>
        </div>
    );
};

export default Temprecture;