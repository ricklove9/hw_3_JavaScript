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

console.log(fib(11));
console.log(pell(11));
console.log(tri(11));
