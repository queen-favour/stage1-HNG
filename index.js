//JS FOR DYNAMIC DATA

function updateTimeAndDay() {
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();

    const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDay.textContent = Days[currentDate.getDay()];

    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTime.textContent = currentDate.getTime();
}

updateTimeAndDay();

setInterval(updateTimeAndDay, 100);
