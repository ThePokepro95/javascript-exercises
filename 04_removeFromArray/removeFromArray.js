const removeFromArray = function(array, ...toRemove) {
    let arrayToReturn = [];
    let addToArray = true;
    for (let i = 0; i < array.length; i++){
        addToArray = true;
        for (let r = 0; r < toRemove.length; r++){
            if (array[i]===toRemove[r]){
                addToArray = false;
                break;
            }
        }
        if (addToArray) arrayToReturn.push(array[i]);
    }
    return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
