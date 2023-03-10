let name = "prabhat"
const repoCount = 30

console.log(name + repoCount + " value");

console.log(`Hello My Name ia ${name} and my repo count is ${repoCount}`)


const gameName = new String('prabhat-pp-com')
console.log(gameName)
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])
console.log(gameName[3])
console.log(gameName[4])
console.log(gameName[5])
console.log(gameName[6])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


const newString = gameName.substring(0,4)

console.log("***********************************************")
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "  prabhat   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://prabhat.com/prabhat%20patel"

console.log(url.replace('%20', '-'))

console.log(url.includes('patel'))
console.log(url.includes('patelG'))

console.log(gameName.split('-'))
