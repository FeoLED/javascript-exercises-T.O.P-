const fibonacci = function(n) {
    parseInt(n);
    if(n<0){
        return "OOPS";
    }else if(n==0){
        return 0
    }else if(n==1){
        return 1
    }else{
        let firstNum = 1;
        let secondNum = 0;

        for (let i = 2; i <= n; i++) {
            let actual = firstNum + secondNum;
            secondNum = firstNum;
            firstNum = actual;
        }

        return firstNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
