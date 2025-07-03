const sumAll = function(a,b) {
    let contador = 0;
    if(typeof(a)!="number"||typeof(b)!="number"||!Number.isInteger(a)||!Number.isInteger || a<0 || b<0){
        return "ERROR";
    }else if(a>b){
        for(let i = b; i<(a+1); i++){
            contador = contador + i;
        }
        return contador;
    }else{
        for(let i = a; i<(b+1); i++){
            contador = contador + i;
        }
        return contador;
    }
   
};

// Do not edit below this line
module.exports = sumAll;
