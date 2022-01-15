const keys = {
  linkImageKey: "_AewFRVxNtbgSBXEJP1VO1izvZUEPz2LWrhTK3-5m8E",
  weatherInfoKey: "43c68556812f4d718d8225fcbe403152",
  geolocationKey: "f1d70789b66349",
  coordinatesInfoKey: "1387942b62094364a1893eb14a67a4dc",
}

export const getLinkToImage = async () => {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${keys.linkImageKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.urls.regular;
};

export const getWeatherInfo = async (city) => {
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=RU&days=5&units=M&lang=en&key=${keys.weatherInfoKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getGeolocationInfo = async () => {
  const url = `https://ipinfo.io/json?token=${keys.geolocationKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getCoordinatesInfo = async (city) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${keys.coordinatesInfoKey}&pretty=1&no_annotations=1`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const maps =
  "pk.eyJ1IjoiYXJvemgiLCJhIjoiY2t5MWwzMncxMGNrZTJubGd0YnJlcjYzZSJ9.S9qiGdmXdAY0bdvE9xPoRA";

export const options = {
  weekday: "short",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};