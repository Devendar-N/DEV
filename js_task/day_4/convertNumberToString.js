/*4. Convert number to strings
for example: convertNumberToString(1)
output “one”
convertNumberToString(98)
output “nineeight”*/

function convertNumberToString(numberToConvert) {
    let words = '';
    if (numberToConvert === undefined) {
        return "Please enter your input.!";
    }
    else {
        // Check that given number is negative
        if (numberToConvert < 0) {
            words += "minus ";
            numberToConvert = -numberToConvert;
        }
        let numbersInString = numberToConvert + "";
        for (let i = 0; i < numbersInString.length; i++) {
            let character = numbersInString[i];
            let asciiCode = character.charCodeAt();
            const digitWords = ["zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            //check the given value is a floating value
            if (asciiCode === 46) {
                words += "point ";
            }
            else if (asciiCode >= 48 && asciiCode <= 57) {
                let digit = asciiCode - 48;
                words += digitWords[digit] + " ";
            }
            else {
                console.error("Invalid character in number");
                break;
            }
        }
    }
    return words;
}
console.log(convertNumberToString("jyri"))