function calc (a,b,c){
    if (c === '+'){
        return a + b;
    } else if(c === '-'){
        return a - b;
    } else if(c === '/'){
        return a / b;
    }else if (c === '*'){
       return a * b;
    }else{
       return "Operador indefinido";
    }
}



module.exports = calc;