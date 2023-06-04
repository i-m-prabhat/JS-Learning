const num = [1, 2, 3];

// const totalNum = num.reduce(function (accumulator, currentValue)
// {
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

const totalNum = num.reduce((acc, curval) => acc + curval, 0)

console.log(totalNum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 6999
    },
    {
        itemName: "MERN course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 9999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);