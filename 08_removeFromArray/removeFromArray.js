const removeFromArray = function(arr, ...victim){
    let modifiedArr = [];
    for(index in arr){
        if(!victim.includes(arr[index])){
            modifiedArr.push(arr[index]);
        }
    }
    return modifiedArr;
}

// Do not edit below this line
module.exports = removeFromArray;
