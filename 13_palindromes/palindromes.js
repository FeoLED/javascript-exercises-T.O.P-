const palindromes = function (string) {
    string = string.toLowerCase();
    let abc = "abcdefghijklmnñopqrstuvwxyz0123456789";
    let newString = "";
    for(let i in string){
        for(let j in abc){
            if((string[i]==abc[j])){
                newString = newString + string[i];
            }
        }
    }
    let temporaryVessel = newString.split("").reverse().join("");
    return (temporaryVessel==newString);
};

// Do not edit below this line
module.exports = palindromes;
