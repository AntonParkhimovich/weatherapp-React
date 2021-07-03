import React, {useState} from 'react';
import GetResponse from './ResponseApi';
import GetGeo from './GeolocationApi';

const Header = (props)=>{
    const[city, setCity]= useState('')
    const [checkCityValue, setCheck]=useState(true)
    const {response, setResponse} = props
    async function clickHandler(){
        if(city){
            setResponse(await GetResponse(city))
            setCity('')
        }else{
            setCheck(false)
        }
    }
    const changeHandler =(event)=>{
        setCity(event.target.value)
        setCheck(true)
    }
     async function geolocationHandler(){
     await GetGeo(setResponse);
    }
    return(
        <>
        <header className="header">
                <input type="text" className="header-input" placeholder={checkCityValue?"Введите город":'Строка поиска пуста'} value={city} onChange={changeHandler}/>
                <button className="header-button" onClick={clickHandler}>{"Поиск"}</button>
                <button className="header-geolocation" onClick={geolocationHandler}></button>
                <button className="header-button--history">{"history"}</button>
        </header>
        </>
    )
}
export default Header