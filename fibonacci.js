const fibonacci = function(iteration_number) {
    var a=1, b=0, temp;
    while (iteration_number>=0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
      }
    
      return b;
}

module.exports = fibonacci
