function updateClock() {
    let now = new Date()
    let hours = String(now.getHours()).padStart(2,"0")
    let minutes = String(now.getMinutes()).padStart(2,"0")
    let seconds = String(now.getSeconds()).padStart(2,"0")
    let milliseconds = String(now.getMilliseconds()).padStart(3,"0")

    document.getElementById("clock").textContent = 
        `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

updateDate
updateClock();
setInterval(updateClock, 1);
