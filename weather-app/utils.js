// 純粋関数置き場。fetchなどの通信はここには書かない(テストしやすさのため。仕様書7章)

// 天気コード(WMO)ごとの表示情報。対応表は仕様書6章
// theme はstyle.cssの空のグラデーション(body.sky-*)と対応する
const WEATHER_TABLE = [
  { match: (c) => c === 0,             icon: "☀️",  text: "快晴",         theme: "sky-clear" },
  { match: (c) => c >= 1 && c <= 3,    icon: "🌤", text: "晴れ時々曇り", theme: "sky-partly" },
  { match: (c) => c === 45 || c === 48, icon: "🌫", text: "霧",           theme: "sky-fog" },
  { match: (c) => c >= 51 && c <= 55,  icon: "🌦", text: "霧雨",         theme: "sky-rain" },
  { match: (c) => c >= 61 && c <= 65,  icon: "🌧", text: "雨",           theme: "sky-rain" },
  { match: (c) => c >= 71 && c <= 75,  icon: "❄️",  text: "雪",           theme: "sky-snow" },
  { match: (c) => c >= 80 && c <= 82,  icon: "🌦", text: "にわか雨",     theme: "sky-rain" },
  { match: (c) => c >= 95 && c <= 99,  icon: "⛈️",  text: "雷雨",         theme: "sky-thunder" },
];

function findWeather(code) {
  return WEATHER_TABLE.find((w) => w.match(code)) ?? null;
}

export function weatherCodeToIcon(code) {
  const w = findWeather(code);
  return w ? w.icon : "─";
}

export function weatherCodeToText(code) {
  const w = findWeather(code);
  return w ? w.text : "不明";
}

// アイコンと名前をつなげた表示(仕様書6章の表と同じ形式)
export function weatherCodeToLabel(code) {
  const w = findWeather(code);
  return w ? `${w.icon} ${w.text}` : "─(不明)";
}

// 天気コード → 空の見た目(bodyに付けるクラス名)
export function skyThemeForCode(code) {
  const w = findWeather(code);
  return w ? w.theme : "sky-partly";
}

// 取得時刻のISO文字列 → 「8/24 14:00 取得」のような表示用文字列
export function formatFetchedAt(isoString) {
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "";
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${d.getMonth() + 1}/${d.getDate()} ${hours}:${minutes} 取得`;
}
