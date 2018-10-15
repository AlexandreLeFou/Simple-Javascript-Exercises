const snakeCase = function(x) {
    var word, wordlower,convertArray=[], k;
    word= x.split("");
    var getout = new RegExp(/[,.!?/]+/)

   // console.log(word);
    console.log("=======================");
    for (var i = 0; i < word.length; i++) {
        word[i]= word[i].toLowerCase().replace(getout,""); //snake case convertion
        word[i]= word[i].replace(" ","_"); //snake case convertion

        //console.log(word[i]);
              
        convertArray.push(word[i]);
    }
      k =convertArray.join('');
    return (k);
}


module.exports = snakeCase
