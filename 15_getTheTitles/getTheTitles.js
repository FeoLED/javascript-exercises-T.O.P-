const getTheTitles = function(arr) {
    let titles = [];
        for(let element in arr){
            titles.push(arr[element].title);
        }
        return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
