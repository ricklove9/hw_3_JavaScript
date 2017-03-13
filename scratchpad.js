var title = document.querySelector('title');
title.textContent = "All Javascript";
document.querySelector('head').appendChild(title)

var fib = function fibHelper(number) {
 
  var returnNumber;
  
  if(number <= 0){
    returnNumber = 0;
  } else if (number === 1){
    returnNumber = 1;  
  } else {
    returnNumber = fib(number-1) + fib(number-2)
  }
  
  return returnNumber;
  
};

var pell = function pellHelper(number) {
  
  var returnNumber;
  
  if(number <= 0){
    returnNumber = 0;
  } else if (number === 1) {
    returnNumber = 1;
  } else {
    returnNumber = (2 * pell(number-1) + pell(number-2));
  }
  
    return returnNumber;
                    
}

var tri = function triHelper(number){
  
  var returnNumber
  
  if(number <= 1){
    returnNumber = 0;
  } else if (number === 2){
    returnNumber = 1;
  } else {
    returnNumber = tri(number-1) + tri(number-2) + tri(number-3);
  } 
  
  return returnNumber;
  
}

function addHyperlink(hyperLink, name){
  var a = document.createElement('a');
  a.textContent = name;
  a.href = hyperLink;
  document.body.appendChild(a);
}

var empty = document.createElement('p')
var empty2 = document.createElement('p')

addHyperlink('https://oeis.org/A000045', 'More about Fibonnaci Numbers');
document.body.appendChild(empty);
addHyperlink('https://oeis.org/A000129', 'More about Pell Numbers');
document.body.appendChild(empty2);
addHyperlink('https://oeis.org/A000073', 'More about Tribonnaci Numbers');

console.log(fib(11));
console.log(pell(11));
console.log(tri(11));
