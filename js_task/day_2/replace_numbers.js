/*Replace all numbers in a string with a given character
Input: replaceNumbers("arun@123", "d")
Output: "arun@ddd"*/
function replaceNumber(string, replaceCharacter) {
    const inputType = typeof string;
    let output = '';
    if (!string.length) {
        console.log("Empty string.!")
    }
    else if (inputType !== string) {
        console.log("Invalid input.!")
    }
    else {
        for (let i = 0; i < string.length; i++) {
            let currectCharacter = string[i];
            if (currectCharacter >= '0' && currectCharacter <= '9') {
                output += replaceCharacter;
            }
            else {
                output += currectCharacter;
            }
        }
        console.log(output)
    }
}
replaceNumber("arun@123", "d")