const palindromes = function(x) {
    //var i,flag;
   var letters = x.split("(?!^)")
    //letters = x.split("")
    var word=""
    for (i=letters.length-1; i>=0; i--){ word += letters[i];}
    //return word[word.length-1];
    var k=word.length-1;
    for (i=0; i<=word.length; i++){
        
        if (word[i]==letters[k]){
            flag = true;}
        else {flag= false;}
    }
    return flag;
}

module.exports = palindromes
//racecar