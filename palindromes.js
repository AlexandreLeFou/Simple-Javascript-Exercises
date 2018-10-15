const palindromes = function(x) {

//https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
var i,flag;
x='ZZZZ car, a man, a maraca.';
var wordgiven = x.split("");
//var wordreversed = wordgiven.reverse();
//var joinedwordreverse= wordreversed.join("");
for (i=0;i<wordgiven.length-1;i++){
	//console.log(wordgiven[(wordgiven.length)-1-i]);    
if (wordgiven[i] === wordgiven[(wordgiven.length)-1-i]){flag= true;}
    else{flag= false;}
}

return flag;
//return joinedwordreverse;

}

module.exports = palindromes
//racecar