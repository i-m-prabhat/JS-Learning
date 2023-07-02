function addLanguage(langName)
{
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;

    document.querySelector('.language').appendChild(li);
}

addLanguage("Python");
addLanguage("C++");
addLanguage("C#");

function addOptiLanguage(langName)
{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addOptiLanguage("Java");
addOptiLanguage("PHP");
addOptiLanguage("golang");

//Edit second child
const secondLang = document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = "Mojo";
const newli = document.createElement('li');
newli.textContent = "Mojo";
secondLang.replaceWith(newli);

//edit first child 
const firstLang = document.querySelector("li:nth-child(1)");
firstLang.outerHTML = '<li>TypeScript</li>'

// remove last lang 
const lastLang = document.querySelector("li:last-child");
lastLang.remove();