var fib = function fibHelper(number) {
 
  var returnNumber;

  if(number <= 0){
    returnNumber = 0;
  } else if (number === 1){
    returnNumber = 1;  
  } else {
    returnNumber = fibHelper(number-1) + fibHelper(number-2)
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
                    
};

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
  
};