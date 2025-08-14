/*Array of Multiples
Get the result of the array in multiples
For example: [2, 5];
Result: [2, 4, 6, 8, 10]*/

function arrayOfMultiples(arrayValue){
    let arrayOfMultiples=[];
    for(let i = 1;i<=arrayValue[1];i++){
        arrayOfMultiples[i-1]=arrayValue[0]*i;
    }
    console.log(arrayOfMultiples)
}
arrayOfMultiples([2,5])