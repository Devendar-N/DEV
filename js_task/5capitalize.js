/*5.Problem: Write a function to capitalize the first letter of each word in a sentence.
Input: "hello from nui"
Output: "Hello From Nui"*/
const input= "hello from nui"
const words=input.split(" ")
const capitalized_words = words.map(word => {
    if(word.length === 0){
        return'';
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
})
const output = capitalized_words.join(' ')
console.log("Capitalized words :",output)