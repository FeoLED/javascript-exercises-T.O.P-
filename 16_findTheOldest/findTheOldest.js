function edad (fechaNacio, fechaMurio){
    if(!fechaMurio){
        fechaMurio = new Date().getFullYear();
    }
    return fechaMurio - fechaNacio;
};
 
const findTheOldest = function(gente) {
return gente.reduce((mayor, actual)=>{
    let mayorEdad = edad(mayor.yearOfBirth, mayor.yearOfDeath);
    let edadActual = edad(actual.yearOfBirth, actual.yearOfDeath);
        if(mayorEdad>edadActual){
            return mayor;
        }else{
            return actual;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;

