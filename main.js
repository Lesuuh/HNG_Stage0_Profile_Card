function updateTime () {
    const utcTimeElement = document.getElementById("utc-time")
    console.log(utcTimeElement)
    const now = new Date()
    utcTimeElement.textContent = now.toUTCString()
}

updateTime()
//setInterval(updateTime, 1000)