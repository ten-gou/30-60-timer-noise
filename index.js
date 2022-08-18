const startTimerEl = document.getElementById('startTimer');
const audioEl = document.getElementById('notificationNoise');

const playNotification = () => {
    audioEl.play()
}

startTimerEl.addEventListener("click", playNotification);