let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 2, 10)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is ${newDate.getTime}`

newDate.toLocaleString('default',{
    weekday: "long",  
})