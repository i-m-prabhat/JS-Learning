// Write a javaScript function that reverse a number 

function revecedNum(num)
{
    return Number(num.toString().split('').reverse().join(''))
}

console.log(revecedNum(258))