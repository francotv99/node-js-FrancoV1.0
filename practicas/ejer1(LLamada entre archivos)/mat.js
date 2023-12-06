const math={

}

function add(x1,x2){

    console.log('Suma:');
    return x1+x2;
}
function sub(x1,x2)
{console.log('Resta:');
return x1-x2;
}
function mult(x1,x2){
    console.log('Multiplica:');
return x1*x2;
}
function divi(x1,x2){

    console.log('Divide:');
if (x2==0)
{
    console.log('no se puede dividir por 0');
}
else{
   return x1/x2;  
}

}



math.add=add;
math.sub=sub;
math.mult=mult;
math.divi=divi;

module.exports=math;


//exporta las funciones:
/*
exports.add=add
exports.sub=sub;
exports.mult=mult;
exports.divi=divi;*/