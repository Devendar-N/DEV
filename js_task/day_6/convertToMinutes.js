/*2. Convert to minutes
Users can give a time like 12:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
Try with different hours and minutes and cover all possible negative cases
*/
function convertTimeToMinutes(timeToConvert) {

    if (timeToConvert > '24:00') {
        console.error("Check your time!");
        return "";
    }

    else {
        let hours = 0;
        let minutes = 0;
        let colonFound = false;
        let i = 0;

        while (i < timeToConvert.length) {
            const charCode = timeToConvert.charCodeAt(i);// getting the ASCII code of the number

            if (charCode >= 48 && charCode <= 57) {
                const digit = charCode - 48;
                if (!colonFound) {
                    hours = hours * 10 + digit;
                }
                else {
                    minutes = minutes * 10 + digit;
                }
            }
            else if (charCode === 58) {   //58 for colon
                colonFound = true;
            }
            else if (charCode === 32) {   // 32 for space
                i++;
                break;
            }
            else {
                return "Invalid input.Please check your input and leave space between time and AM/PM"
            }
            i++;
        }

        // 12 hours time formate
        let period = "";
        while (i < timeToConvert.length) {
            const character = timeToConvert.charCodeAt(i);
            period += String.fromCharCode(character);
            i++;
        }

        if ((period[0] === 'P' || period[0] === 'p') && hours !== 12) {
            hours += 12;
        }

        if ((period[0] === "A" || period[0] === "a") && hours === 12) {
            hours = 0;
        }
        totalMinutes = (hours * 60) + minutes;

        if (totalMinutes > 1440) {
            console.error("Don`t mix 24 time with AM/PM");
            return '';
        }
        else {
            return totalMinutes;
        }
    }
}
module.exports = { convertTimeToMinutes };
//console.log(convertTimeToMinutes("02:30 am"))