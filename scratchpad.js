var div = document.createElement('div')

var p = document.createElement('p')

div.appendChild(p)

p.textContent = "I am Text"

document.querySelector('body').appendChild(div)