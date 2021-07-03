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
      arrHistory.unshift(element);
      localStorage.setItem('history', JSON.stringify(arrHistory));
    }
  }
const SearchHistory=()=>{
    const data = JSON.parse(localStorage.getItem('history'));
    return(
    <>
        <div className="weather">
        <ul className="search-history__head">{
            lodash.forEach(data,({ current, dateResponse, location: { name, country } })=>{
                <>
                <li className="search-item">${name}, ${country}</li>
                <li className="search-item">${current.temperature}&#176С</li>
                <li className="search-item">${current.weather_descriptions[0]}</li>
                <li className="search-item">${current.wind_dir}</li>
                <li className="search-item">${current.wind_speed}</li>
                <li className="search-item">${dateResponse}</li>
                 </>
            })
        }
            
        </ul>
        </div>
    </>
    )
}