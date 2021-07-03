import WeatherInfo from "./Weather-info"

const Main = (props) =>{
    const {data}= props
    return(
        <WeatherInfo data={data}/>
    )
    
}

export default Main