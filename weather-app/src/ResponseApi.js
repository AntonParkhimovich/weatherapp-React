import { setElementInHistory } from "./History";

function GetResponse(responseCity) {
    return fetch(
        `http://api.weatherstack.com/current?access_key=6ef04114106f0d26e10965a03e92a579&query=${responseCity}`
      )
        .then((response) => response.json())
        .then((response)=>{setElementInHistory(response); return response})
        .then((response) => response);
    
  }
export default GetResponse