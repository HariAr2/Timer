const launchDate = '4 Apr 2025';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const currentDate = new Date(); 
    const formattedLaunchDate = new Date(launchDate);

    const timeDifference = formattedLaunchDate - currentDate;
    const totalSeconds = Math.floor(timeDifference / 1000); 

    const daysDifference = Math.floor(totalSeconds / (24 * 60 * 60));
    const hoursDifference = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutesDifference = Math.floor((totalSeconds % (60 * 60)) / 60);
    const secondsDifference = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(daysDifference);
    hoursEl.innerHTML = formatTime(hoursDifference);
    minutesEl.innerHTML = formatTime(minutesDifference);
    secondsEl.innerHTML = formatTime(secondsDifference);
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown(); 
setInterval(countdown, 1000); 
