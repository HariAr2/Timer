const launchDate = "4 Apr 2025";
const daysEl = document.getElementById("days");//connecting with html elemets
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


//main function
function countdown() {
  const currentDate = new Date(); // Get current date
  const formattedLaunchDate = new Date(launchDate); // Convert launch date to Date object

  const timeDifference = formattedLaunchDate - currentDate; // Calculate time difference in milliseconds
  const totalSeconds = Math.floor(timeDifference / 1000); // Convert to seconds

  const daysDifference = Math.floor(totalSeconds / (24 * 60 * 60)); // Calculate days difference
  const hoursDifference = Math.floor(
    (totalSeconds % (24 * 60 * 60)) / (60 * 60)
  ); // Calculate hours difference
  const minutesDifference = Math.floor((totalSeconds % (60 * 60)) / 60); // Calculate minutes difference
  const secondsDifference = Math.floor(totalSeconds % 60); // Calculate seconds difference

  daysEl.innerHTML = formatTime(daysDifference); // Display days difference
  hoursEl.innerHTML = formatTime(hoursDifference); // Display hours difference
  minutesEl.innerHTML = formatTime(minutesDifference); // Display minutes difference
  secondsEl.innerHTML = formatTime(secondsDifference); // Display seconds difference
}
function formatTime(time) {
  // If time is less than 10, prepend a '0'
  
  return time < 10 ? `0${time}` : time;
}

countdown();
//makes sure to set Intreval for 1 second(1000ms)

setInterval(countdown, 1000);
