function largestEvenNumberN(numbers){
    let resultN = Number.MIN_SAFE_INTEGER;

    function funNormal(item){
        resultN = ( (item%2==0 && item>resultN)?item:resultN  );
    }

    numbers.forEach(funNormal);
    return (resultN===Number.MIN_SAFE_INTEGER)? -1: resultN;
}

console.log( largestEvenNumberN([1,5,3,-7,5]));
module.exports =  largestEvenNumberN;


//----------------------------------------------

const largestEvenNumberA = (numbers) => {
    let resultA = Number.MIN_SAFE_INTEGER;

    const funArrow =  (item) => {
        resultA = ( (item%2!=0 && item>resultA)?item:resultA );
    }
    numbers.forEach(funArrow);
    return (resultA===Number.MIN_SAFE_INTEGER)? -1: resultA;
}


console.log( largestEvenNumberA([1,2,3,4,5]));
module.exports =  largestEvenNumberA;



/*
const numbers = [1, 3, -8, 9];
let resultN = Number.MIN_SAFE_INTEGER;
let resultA = Number.MIN_SAFE_INTEGER;

function largestEvenNumberN(item){
    resultN = ( (item%2==0 && item>resultN)?item:resultN  );
}

const largestEvenNumberA =  (item) => {
    resultA = ( (item%2==0 && item>resultA)?item:resultA );
}

numbers.forEach(largestEvenNumberN);
numbers.forEach(largestEvenNumberA);


console.log( (resultN===Number.MIN_SAFE_INTEGER)? -1: resultN);
console.log( (resultA===Number.MIN_SAFE_INTEGER)? -1: resultA);
*/