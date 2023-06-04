const myObject = {
    js: "JavaScript",
    cpp: "c++",
    rb: "ruby",
    swt: "Swift by apple"
}

for (const key in myObject)
{
    // if (Object.hasOwnProperty.call(myObject, key))
    // {
    //     const element = myObject[key];
    //     console.log(element)
    // }

    // console.log(key, ":", myObject[key])
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const lang in programming)
{
    // console.log(programming[lang])
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

for (const key in map)
{
    console.log(key)
}