/*2. Convert to minutes
Users can give a time like 12:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
Try with different hours and minutes and cover all possible negative cases
*/
const time = "11:45";
function convertTimeToMinutes(timeString) {
    let hours = 0;
    let minutes = 0;
    let colonFound = false;

    // Loop through each character in the input string
    for (let i = 0; i < timeString.length; i++) {
        const charCode = timeString.charCodeAt(i);
        // Check if character is a digit by(ASCII 48–57)
        if (charCode >= 48 && charCode <= 57) {
            const digit = charCode - 48;
            if (colonFound === false) {
                hours = hours * 10 + digit;
            } else {
                minutes = minutes * 10 + digit;
            }
        }
        else if (charCode === 58) {
            colonFound = true;
        }
        // If character is invalid (not digit or colon), return error
        else{
            return "Invalid input.please check your input.!";
            break;
        }
    }
    const totalMinutes = (hours * 60) + minutes;
    return `The time ${timeString} represents a total of ${totalMinutes} minutes`;
;
}
console.log(convertTimeToMinutes("11:45"))