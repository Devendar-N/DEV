/*6. Problem: Find common elements in three arrays.
Input: [1, 2, 3], [2, 3, 4], [0, 2, 5, 3]
Output: [2, 3]*/
const input= [[1, 2, 3], [2, 3, 4], [0, 2, 5, 3]]
const combinedarray=input.flat()
const seen= new Set()
const duplicates =[]
for(item of combinedarray){
    if(seen.has(item)){
        duplicates.push(item)
    }
    else{
        seen.add(item)
    }
}    
const output = new Set(duplicates)
const final_output = [...output]
console.log(final_output)