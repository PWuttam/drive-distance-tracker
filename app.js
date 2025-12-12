const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const statusEl = document.getElementById('status');
const latEl = document.getElementById('lat');
const lonEl = document.getElementById('lon');

let intervalId = null;

const updateDisplay = (lat, lon) => {
  latEl.textContent = lat != null ? lat.toFixed(6) : '-';
  lonEl.textContent = lon != null ? lon.toFixed(6) : '-';
};

const setStatus = (text) => {
  statusEl.textContent = text;
};

const fetchLocation = () => {
  if (!navigator.geolocation) {
    setStatus('この端末では位置情報が利用できません');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      updateDisplay(latitude, longitude);
      setStatus('取得中');
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

  setStatus('位置情報の許可をリクエストしています...');
  fetchLocation();
  intervalId = setInterval(fetchLocation, 30_000);
};

const stopRecording = () => {
  if (intervalId === null) {
    return;
  }
  clearInterval(intervalId);
  intervalId = null;
  setStatus('停止中');
};

startBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);
