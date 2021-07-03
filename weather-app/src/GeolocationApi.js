import GetResponse from "./ResponseApi";
function GetGeo(setResponse) {
    navigator.geolocation.getCurrentPosition((posityion) => {
      const {
        coords: { latitude, longitude },
      } = posityion;
     GetResponse(`${latitude},${longitude}`).then((response) => 
       setResponse(response) 
      );
    });
  }
  export default GetGeo