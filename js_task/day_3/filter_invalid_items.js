/* Given an array, filter out the invalid items
For example:
filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
Output [“a”, “d”, true, “cd”];*/

function filterInvalidItems(array, invalid) {
    let validItems = []; // to save valid items
    // check the user input
    if (Array.isArray(array) && array) {
        console.log("Empty input.Please enter the input.!");
    } else if (array.length === 0 || invalid.length === 0) {
        console.log("Please enter the input or invalid items to remove.")
    } else {
        // Filter the items 
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== invalid.toLowerCase()) {
                validItems[validItems.length] = array[i];
            }
        }
        console.log(validItems);
    }
}

3/10

// filterInvalidItems(["a", "d", 1, true, "cd", 33], 'numbeR')
filterInvalidItems({'ab': 'two'}, 'number');