/*Format phone number
Convert a ten digit number into US phone formatting
For example: 9840164723 to "(984)016-473"   (AAA)BBB-CCCC
Throw error if it's not a valid phone number*/

const input = "jhy"
function formateUSPhone(tenDigitNumber) {
    let string = tenDigitNumber.toString();

    //Function to validate the given input 
    function checkInput(stritenDigitNumberng) {
        if (string.length !== 10) {
            console.error("Invalid input! Input must contain 10 numbers");
            return false;
        }

        for (let i = 0; i < string.length; i++) {
            if (string[i] < 'o' || string[i] > '9') {
                console.error("Invalid input! Input must containes only numbers");
                return false;
            }
        }
        return true;
    }
    let validInput = checkInput();
    if (validInput) {
        digitMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        //seperating 10 digit number
        let seperateNumbers = [];
        while (tenDigitNumber > 0) {
            let digit = tenDigitNumber % 10
            seperateNumbers.push(digitMap[digit]);
            tenDigitNumber = (tenDigitNumber - digit) / 10;
        }

        // convert to (AAA)BBB-CCCC
        let USFormate = "("
        for (let i = 9; i > 6; i--) {
            USFormate += seperateNumbers[i]
        }
        USFormate += ")"
        for (let i = 6; i > 3; i--) {
            USFormate += seperateNumbers[i];
        }
        USFormate += "-"
        for (let i = 3; i >= 0; i--) {
            USFormate += seperateNumbers[i];
        }

        return USFormate;
    }
    else {
        return "";
    }

}
console.log(formateUSPhone(input));