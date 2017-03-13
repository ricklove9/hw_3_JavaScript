function fibHelper(number) {
 
  var returnNumber;
  var div = document.createElement('div');
  div.setAttribute("class", "fib")

  if(number <= 0){
    returnNumber = 0;
    
    var p = document.createElement('p');
    p.textContent = 'Fib(' + number + ') = ' + returnNumber;
    
  } else if (number === 1){
    returnNumber = 1; 

    var p = document.createElement('p');
    p.textContent = 'Fib(' + number + ') = ' + returnNumber;
    
  } else {
      var left = fibHelper(number-1)
      var clas = left.html.setAttribute("class");
      left.html.setAttribute("class", clas + " fib-left");
      
      var right = fibHelper(number-2);
      var clas = right.html.getAttribute("class");
      right.html.setAttribute("class", clas + " fib-right");
      
    returnNumber = left.returnNumber + right.returnNumber;
    
    var p = document.createElement('p');
		p.textContent = 'Fib(' + number + ') = ' + returnNumber;
		div.appendChild(p);

        div.appendChild(left.html)
        div.appendChild(right.html);
  }
  
  return {'returnNumber': returnNumber, 'html': div};
  
}

var fib = function (number, node) {
    var tree = fibHelper(number)
            node.appendChild(tree.html);
        node.setAttribute("id", "fib");
}

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