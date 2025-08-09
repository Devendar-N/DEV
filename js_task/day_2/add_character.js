/*Add "@" after each occurrence of character "c" in a string
Input: "cat in the bag"
Output: "c@at in the bag"*/
function addingSymbol(string,letter,symbol){
    const inputType = typeof string;
    if(string === 0){
        console.log("Empty string!");
    }
    else if ( inputType !== "string"){
        console.log("Invalid input.");
    }
    else{
        let result = '' ;
        for(let i = 0; i < string.length ; i++){
            let currentCharacter = string[i];
            if(currentCharacter === letter || currentCharacter ===letter.toUpperCase()){
                result += currentCharacter + symbol;
            }
            else{
                result += currentCharacter;
            }
        }
        console.log(result);
    }
}
addingSymbol("cat in the bag",'c','@')