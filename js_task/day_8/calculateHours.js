/*Calculate total hours passed between two time
Accepted input format example "9:00 AM"
Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes*/

// importing a function from another file
const { convertTimeToMinutes } = require('../day_6/convertToMinutes')

function calculateTotalHoursElapsed(startingTime, endingTime) {
    if (typeof startingTime !== 'string' || typeof endingTime !== "string") {
        console.error("Check your input.");
        return "";
    }
    else {
        let startingTimeInMinutes = convertTimeToMinutes(startingTime);
        let endingTimeInMinutes = convertTimeToMinutes(endingTime);

        if (startingTimeInMinutes > endingTimeInMinutes) {
            startingTimeInMinutes = startingTimeInMinutes - 720;
            endingTimeInMinutes = endingTimeInMinutes + 720;
        }
        let difference = 0;
        let hours = 0;
        let minutes = 0;
        difference = endingTimeInMinutes - startingTimeInMinutes;
        if (difference < 0) {
            difference = -difference;
        }
        while (difference >= 60) {
            hours++;
            difference -= 60;
        }
        minutes = difference;
        return hours + " Hours " + minutes + " minutes ";
    }
}

console.log(calculateTotalHoursElapsed("11:45 am", "01:15 am"))