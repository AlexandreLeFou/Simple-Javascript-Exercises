const palindromes = function(x) {

//https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
  var noneedthese = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  var stringprocess = x.toLowerCase().replace(noneedthese, '');
 
  var reversestring = stringprocess.split('').reverse().join(''); 
  
  
  
  return reversestring === stringprocess; 

}

module.exports = palindromes
//racecar