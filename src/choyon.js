const number = x =>{
    return x+1;
}
const increment = (a,b) =>{
    return b(a);
}

const getIncrement = () => {
    return number;
}

console.log(number(3))
console.log(increment(10,number))
console.log(increment(23,getIncrement()))

