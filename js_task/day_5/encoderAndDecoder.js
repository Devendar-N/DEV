/*2. Encoder and Decoder
Encode a string in such a way that the output will be the next characters given as input
For example:
encode(“arun”, 2)  -> ctwp
encode(“arun”, 4) -> evyr
And similarly decode will return the opposite
decode(“ctwp”, 2) -> arun
decode(“evyr”, 4) -> arun*/
function encode(nameToEncode, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let maskNames = "";

    //loop through the given input
    for (let i = 0; i < nameToEncode.length; i++) {
        let character = nameToEncode[i];

        //shift the character 
        for (let j = 0; j < alphabet.length; j++) {
            if (character === alphabet[j]) {
                maskNames += alphabet[[j + shift]%alphabet.length];
            }
        }
    }
    return "The name has been encoded for privacy:" + maskNames;
}
function decode(nameToDecode, shiftValue) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let unmaskNames = "";

    //loop through the given input
    for (let i = 0; i < nameToDecode.length; i++) {
        let character = nameToDecode[i];

        //shift the character 
        for (let j = 0; j < alphabet.length; j++) {
            if (character === alphabet[j]) {
                unmaskNames += alphabet[[j - shiftValue+alphabet.length]%alphabet.length];
            }
        }
    }
    return "The name has been decoded back to its original form:" + unmaskNames;
}
console.log(encode("arun", 4))
console.log(decode("evyr", 4))