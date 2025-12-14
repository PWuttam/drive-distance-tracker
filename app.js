const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const statusEl = document.getElementById('status');
const latEl = document.getElementById('lat');
const lonEl = document.getElementById('lon');

let intervalId = null;
let gpsPoints = [];
let totalDistanceKm = 0;

const updateDisplay = (lat, lon) => {
  latEl.textContent = lat != null ? lat.toFixed(6) : '-';
  lonEl.textContent = lon != null ? lon.toFixed(6) : '-';
};

const setStatus = (text) => {
  statusEl.textContent = text;
};

const setRecordingState = (isRecording) => {
  startBtn.disabled = isRecording;
  stopBtn.disabled = !isRecording;
  statusEl.classList.toggle('recording', isRecording);
  statusEl.classList.toggle('idle', !isRecording);
};

const toRadians = (degrees) => (degrees * Math.PI) / 180;

const haversineDistanceKm = (p1, p2) => {
  const earthRadiusKm = 6371;
  const dLat = toRadians(p2.lat - p1.lat);
  const dLon = toRadians(p2.lon - p1.lon);
  const lat1 = toRadians(p1.lat);
  const lat2 = toRadians(p2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
};

const fetchLocation = () => {
  if (!navigator.geolocation) {
    setStatus('この端末では位置情報が利用できません');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      const previousPoint = gpsPoints[gpsPoints.length - 1];
      gpsPoints.push({
        lat: latitude,
        lon: longitude,
        timestamp: Date.now(),
      });
      if (previousPoint) {
        totalDistanceKm += haversineDistanceKm(previousPoint, {
          lat: latitude,
          lon: longitude,
        });
      }
      updateDisplay(latitude, longitude);
      setStatus(`取得中 (${gpsPoints.length}件 / ${totalDistanceKm.toFixed(2)} km)`);
    },
    (err) => {
      setStatus(`エラー: ${err.message}`);
    },
    { enableHighAccuracy: true }
  );
};

const startRecording = () => {
  if (intervalId !== null) {
    return;
  }

  gpsPoints = [];
  totalDistanceKm = 0;
  setStatus('位置情報の許可をリクエストしています...');
  setRecordingState(true);
  fetchLocation();
  intervalId = setInterval(fetchLocation, 30_000);
};

const stopRecording = () => {
  if (intervalId === null) {
    return;
  }
  clearInterval(intervalId);
  intervalId = null;
  console.log('Recorded points:', gpsPoints);
  setStatus(`停止中 (${gpsPoints.length}件記録 / ${totalDistanceKm.toFixed(2)} km)`);
  setRecordingState(false);
};

startBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);

setRecordingState(false);
