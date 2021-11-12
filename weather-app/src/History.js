import { format } from 'date-fns';
const lodash = require('lodash');
export function setElementInHistory(element) {
    if (element.error) {
      console.log('Запрос некорректный');
    } else if (localStorage.getItem('history') !== null) {
      const arrHistory = JSON.parse(localStorage.getItem('history'));
      element.dateResponse = format(new Date(), 'MM/dd/E/yyyy');
      arrHistory.unshift(element);
      if (arrHistory.length > 5) {
        arrHistory.length = 5;
      }
      localStorage.setItem('history', JSON.stringify(arrHistory));
    } else {
      const arrHistory = [];
      element.dateResponse = format(new Date(), 'MM/dd/E/yyyy');
      arrHistory.unshift(element);
      localStorage.setItem('history', JSON.stringify(arrHistory));
    }
  }
 export const SearchHistory=()=>{
    const data = JSON.parse(localStorage.getItem('history'));
   
    if (data !== [] && data !== null){
      return(
        <>
           <div className="search-history">
            <ul className="search-history__head">
                    <li className="search-item">City</li>
                    <li className="search-item">Degrees</li>
                    <li className="search-item">Weather</li>
                    <li className="search-item">Wind</li>
                    <li className="search-item">Wind speed</li>
                    <li className="search-item">Date</li>
            </ul>
            <div className="search-history__body">
            {
              data.map(({ current, dateResponse, location: { name, country } }) => 
                <>
                 <ul className="search-history__head">
                <li className="search-item">{name}, {country}</li>
                <li className="search-item">{current.temperature}{"\u00b0С"}</li>
                <li className="search-item">{current.weather_descriptions[0]}</li>
                <li className="search-item">{current.wind_dir}</li>
                <li className="search-item">{current.wind_speed}</li>
                <li className="search-item">{dateResponse}</li>
                </ul>
                 </>
              )
            }
             </div>
            </div>
        </>
        )
    }else{
      return(
        <div className="weather">
            <h2 className="weather-response">{"Ваша история поиска пуста"}</h2>
        </div>
      )
    }
   
}
