/*Merge two arrays and sort them from lowest to highest
Input1: [1, 4, 6]
Input2: [2, 5, 3]
Output: [1, 2, 3, 4, 5, 6]*/

const inputArray1 = [1, 4, 6] ;
const inputArray2 = [2, 5, 3] ;
function sortAndMerge(array1,array2){
    // checking  the input 
    let arrayLength ;
    if(typeof array1 !== 'object' || typeof array2 !== 'object' ){
        console.log("Invalid input.!");
    }
    else {
        let mergedArray = [];
        // Merging user inputs 
        for(let i = 0;i < array1.length;i++){
            mergedArray[mergedArray.length] = array1[i] ;
        }
        for(let j = 0; j < array2.length;j++){
           mergedArray[mergedArray.length] = array2[j]; 
        }
        console.log("Merged array :",mergedArray);

        // sorting from lowest to highest
            for(let k =0;k < mergedArray.length; k++){
                for(let l =0;l < mergedArray.length; l++){
                    if( mergedArray[l] < mergedArray[l+1] ){
                        let swapVariable = mergedArray[l] ;
                        mergedArray[l] = mergedArray[l+1] ;
                        mergedArray[l+1] = swapVariable ;
                    }
                }
            }
    console.log("Sorted array :",mergedArray);
    }
}
sortAndMerge(inputArray1,inputArray2)