import { weatherCodeToLabel, formatFetchedAt } from "./utils.js";

// ステップ1の表示側(#5): getWeather() がマージされるまでのダミーデータ。
// 形は仕様書6章の契約と同じにしてある。つなぎ込みのPRでこの定数を削除し、
// api.js の getWeather() の返り値に差し替える。
const DUMMY_WEATHER = {
  city: "東京都 東京",
  fetchedAt: "2026-08-24T14:00:00+09:00",
  current: {
    temperature: 31.2,
    weatherCode: 0,
    windSpeed: 3.2,
  },
  daily: [
    { date: "2026-08-24", weatherCode: 0, tempMax: 33.1, tempMin: 25.0, rainChance: 10 },
    { date: "2026-08-25", weatherCode: 2, tempMax: 30.5, tempMin: 24.8, rainChance: 30 },
    { date: "2026-08-26", weatherCode: 63, tempMax: 27.2, tempMin: 23.5, rainChance: 80 },
    { date: "2026-08-27", weatherCode: 61, tempMax: 28.0, tempMin: 23.9, rainChance: 60 },
    { date: "2026-08-28", weatherCode: 1, tempMax: 31.4, tempMin: 24.2, rainChance: 20 },
    { date: "2026-08-29", weatherCode: 0, tempMax: 32.8, tempMin: 25.3, rainChance: 0 },
    { date: "2026-08-30", weatherCode: 95, tempMax: 29.1, tempMin: 24.6, rainChance: 90 },
  ],
};

function renderWeather(weather) {
  document.getElementById("city").textContent = weather.city;
  document.getElementById("fetched-at").textContent = formatFetchedAt(weather.fetchedAt);
  document.getElementById("weather-label").textContent = weatherCodeToLabel(weather.current.weatherCode);
  document.getElementById("temperature").textContent = `${Math.round(weather.current.temperature)}℃`;
  document.getElementById("wind-speed").textContent = weather.current.windSpeed;
  // weather.daily(7日分)はステップ3(#7)で表示する
}

renderWeather(DUMMY_WEATHER);
