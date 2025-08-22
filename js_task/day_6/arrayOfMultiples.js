/*Array of Multiples
Get the result of the array in multiples
For example: [2, 5];
Result: [2, 4, 6, 8, 10]*/

function arrayOfMultiples(arrayValue){
    const[base,count] = arrayValue;

    if(!Array.isArray(arrayValue) || arrayValue.length !== 2){
        console.error("Input must be an array with two numbers.");
        return '';
    }
    else if(typeof base !== 'number' || typeof count !== 'number'){
        console.error("Both elements must be numbers.");
        return '';
    }
    else if(count <= 0){
        console.warn("Count must be a positive number.");
        return '';
    }

    else{
        let arrayOfMultiples=[];
        for(let i = 1;i<=arrayValue[1];i++){
            arrayOfMultiples[i-1]=arrayValue[0]*i;
        }
        return arrayOfMultiples;
    }
}
console.log(arrayOfMultiples([2,5]))