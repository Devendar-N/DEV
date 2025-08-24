/*Calculate total hours passed between two time
Accepted input format example "9:00 AM"
Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes*/

// importing a function from another file
const { convertTimeToMinutes } = require('../day_6/convertToMinutes')

function calculateTotalHoursElapsed(startingTime, endingTime) {
    
    if (typeof startingTime !== 'string' || typeof endingTime !== "string") {
        console.error("Invalid input. Check your input.");
        return "";
    }
    else if(startingTime.length === 0 || endingTime.length === 0){
        console.error("Please enter Starting/Ending time!.");
        return "";
    }
    else {
        let startingTimeInMinutes = convertTimeToMinutes(startingTime); // Using other function form another js file
        let endingTimeInMinutes = convertTimeToMinutes(endingTime);

        // if user input like 12pm-1am
        if (startingTimeInMinutes > endingTimeInMinutes) {
            startingTimeInMinutes -=  720;
            endingTimeInMinutes += 720;
        }

        let difference = 0;
        let hours = 0;
        let minutes = 0;
        difference = endingTimeInMinutes - startingTimeInMinutes;

        //  if minutes difference is in negative
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
console.log(calculateTotalHoursElapsed("09:00 AM", "03:15 PM"))