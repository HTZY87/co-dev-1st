// 純粋関数置き場。fetchなどの通信はここには書かない(テストしやすさのため。仕様書7章)

// 天気コード(WMO) → 表示文字列。対応表は仕様書6章
export function weatherCodeToLabel(code) {
  if (code === 0) return "☀ 快晴";
  if (code >= 1 && code <= 3) return "🌤 晴れ時々曇り";
  if (code === 45 || code === 48) return "🌫 霧";
  if (code >= 51 && code <= 55) return "🌦 霧雨";
  if (code >= 61 && code <= 65) return "🌧 雨";
  if (code >= 71 && code <= 75) return "❄ 雪";
  if (code >= 80 && code <= 82) return "🌦 にわか雨";
  if (code >= 95 && code <= 99) return "⛈ 雷雨";
  return "─(不明)";
}

// 取得時刻のISO文字列 → 「8/24 14:00 取得」のような表示用文字列
export function formatFetchedAt(isoString) {
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "";
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `(${d.getMonth() + 1}/${d.getDate()} ${hours}:${minutes} 取得)`;
}
