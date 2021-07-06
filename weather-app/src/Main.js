import WeatherInfo from "./Weather-info"
import { SearchHistory } from "./History"
const Main = (props) =>{
    const {data, history}= props
    if (history){
        return(
     <SearchHistory/>  
    )}else{
        return(
    <WeatherInfo data={data}/>
        )
    }
    
}

export default Main