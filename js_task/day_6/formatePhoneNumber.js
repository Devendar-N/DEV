/*Format phone number
Convert a ten digit number into US phone formatting
For example: 9840164723 to "(984)016-473"   (AAA)BBB-CCCC
Throw error if it's not a valid phone number*/
const input = 9840164723
function formateUSPhone(tenDigitNumber) {
    digitMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let seperateNumbers = [];
    while (tenDigitNumber > 0) {
        let digit = tenDigitNumber % 10
        seperateNumbers.push(digitMap[digit]);
        tenDigitNumber = (tenDigitNumber - digit) / 10;
    }
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
console.log(formateUSPhone(input))