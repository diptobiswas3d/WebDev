let date = document.getElementById("date")
let time = document.getElementById("time")

function displayDateTime() {
    let curDateTime = new Date();

    let day = curDateTime.getDate();
    let month = curDateTime.getMonth();
    let year = curDateTime.getFullYear();
    let hr = curDateTime.getHours();
    let min = curDateTime.getMinutes();
    let sec = curDateTime.getSeconds();

    date.innerHTML = day + " / " + month + " / " + year;
    time.innerHTML = hr + " : " + min + " : " + sec;
}

setInterval(displayDateTime, 100)