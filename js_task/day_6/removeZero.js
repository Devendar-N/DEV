/*Remove zeros either trailing / leading
Input - "000000123423423000"
removeZeros(input, "leading") // output 123423423000
removeZeros(input, "trailing") // output 000000123423423
*/
function removeZero(stringOfNumber, type) {
    let result = "";
    let foundNonZero = false;

    if (typeof stringOfNumber !== 'string') {
        console.error("Input must be a string");
        return '';
    }
    else if (stringOfNumber.length === 0) {
        console.error("Empty input.");
        return '';
    }
    else {
        if (type === "leading") {
            for (let i = 0; i < stringOfNumber.length; i++) {

                //Finding non-zero values
                if (!foundNonZero && stringOfNumber[i] !== '0') {
                    foundNonZero = true;
                }
                if (foundNonZero) {
                    result += stringOfNumber[i];
                }
            }
        }
        else if (type === "trailing") {
            for (let i = stringOfNumber.length - 1; i > 0; i--) {

                //Finding non-zero values
                if (!foundNonZero && stringOfNumber[i] !== '0') {
                    foundNonZero = true;
                }
                if (foundNonZero) {
                    result = stringOfNumber[i] + result;
                }
            }
        } 
        else { return "Invalid type"; }
        return `After ${type} : `+result;
    }
}
const input = "000000123423423000";
console.log(removeZero(input,"trailing"))