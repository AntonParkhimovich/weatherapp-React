const WeatherInfo = (props)=>{
    let {data} = props
    if(Object.keys(data).length === 0){
        return (
            <div className="weather">
                <h2 className="weather-response">{"Введите город"}</h2>
            </div>
        )
    }if(data.error){
        return (
            <div className="weather">
                <h2 className="weather-response">{"Вы ввели некорректный город или сервер не отвечает попробуйте снова"}</h2>
            </div>
        )
    }
    else{
        const {
            current,
            location: { name, country, localtime },
          } = props.data;
        return(
            <>
        <div className="weather">
            <div className="weather-head">
                <img className="icon" src={current.weather_icons[0]} alt={"weather-pic"}/>
            </div>
            <div className="weather-body">
                <div className="weather-info">
                    <h2 className="weather-degrees">{current.temperature}{"\u00b0С"}</h2>
                    <h2 className="weather-city">{country},{name}</h2>
                </div>
                <div className="weather-footer">
                    <div className="weather-box">
                        <li className="weather-box__info">{"Time:"}{localtime.slice(10,16)}</li>
                        <li className="weather-box__info">{"Wind:"}{current.wind_dir}</li>
                    </div>
                    <div className="weather-box">
                        <li className="weather-box__info">{"Feels like:"}{current.feelslike}{"\u00b0C"}</li>
                        <li className="weather-box__info">{"Speed: "}{current.wind_speed}{"km/h"}</li>
                    </div>
                    <div className="weather-box">
                        <li className="weather-box__info">{"Today is:"} {current.weather_descriptions[0]}</li>
                        <li className="weather-box__info">xz</li>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }

}
export default WeatherInfo