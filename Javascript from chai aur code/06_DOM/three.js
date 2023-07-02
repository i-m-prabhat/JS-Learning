let body = document.querySelector('body');
const div = document.createElement('div');
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";
// div.innerText = "Hello Mr, Coder";
const addtext = document.createTextNode("Hello Mr, Coder");
div.appendChild(addtext);
console.log(div);

body.appendChild(div);