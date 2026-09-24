import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [city, setCity] = useState("Tehran");
  const [weather, setWeather] = useState(null);

  const API_KEY = "2798827f6c023282579eed21db561182";

  const fetchWeather = async () => {
    const trimmedCity = city.trim();
    if (!trimmedCity) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(trimmedCity)}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
        setWeather(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching weather data");
    }
  };

  // تشخیص شب یا روز از API
  const isNight = weather?.weather?.[0]?.icon?.includes("n");

  // تغییر پس‌زمینه بر اساس وضعیت هوا
  const bgClass = () => {
    if (!weather || !weather.weather) return "from-blue-300 to-blue-500";
    const main = weather.weather[0].main.toLowerCase();
    const icon = weather.weather[0].icon;
    if (main.includes("cloud")) return "from-gray-400 to-gray-600";
    if (main.includes("rain")) return "from-gray-500 to-gray-700";
    if (icon.includes("n")) return "from-gray-800 to-black";
    return "from-yellow-400 to-blue-400";
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br ${bgClass()} transition-colors duration-1000`}
    >
      <h1 className="text-4xl font-bold text-white mb-6">Weather App 🌤️</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} isNight={isNight} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
