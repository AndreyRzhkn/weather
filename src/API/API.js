export const getLinkToImage = async () => {
    const key = "_AewFRVxNtbgSBXEJP1VO1izvZUEPz2LWrhTK3-5m8E"
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
  };
  
  export const getWeatherInfo = async (city, units, lang) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=RU&days=5&units=${units}&lang=${lang}&key=43c68556812f4d718d8225fcbe403152`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  
  export const getGeolocationInfo = async () => {
    const url = "https://ipinfo.io/json?token=f1d70789b66349";
    const res = await fetch(url); 
    const data = await res.json();
    return data.city
  }
  
  export const getCoordinatesInfo = async (city) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=1387942b62094364a1893eb14a67a4dc&pretty=1&no_annotations=1`;
    const res = await fetch(url);
    const data = await res.json();
    return data
  }