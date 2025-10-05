import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.weather) return null; // ❌ هیچ چیزی نمایش داده نشه

  const { name, main, weather: weatherInfo, wind } = weather;
  const icon = weatherInfo[0]?.icon;
  const description = weatherInfo[0]?.description;
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@4x.png` : null;

  return (
    <div className="max-w-md w-full bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center text-white">
      <h2 className="text-3xl font-bold mb-2">{name}</h2>
      {iconUrl && <img src={iconUrl} alt={description} className="mx-auto mb-4" />}
      <p className="text-5xl font-extrabold">{main.temp}°C</p>
      <p className="capitalize text-lg mb-4">{description}</p>
      <div className="flex justify-around text-md">
        <p>Feels like: {main.feels_like}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
