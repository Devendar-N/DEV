/*7. Problem: Add a given number of asterisks (*) before and after a string.
Input: padWithStars("code", 3)
Output: "***code***"*/
const input = "code"



function paddingwith_stars(word, count) {
    const character = "*"
    const padded_start = word.padStart(word.length+count,character)
    const padded_end= padded_start.padEnd(padded_start.length+count,character)
    console.log("Padded String :",padded_end)
}


paddingwith_stars('code', 5)
