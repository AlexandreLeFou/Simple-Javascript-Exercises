const snakeCase = function(x) {
    var word, wordlower,convertArray=index=[], k;
    word= x.split("");
    var getout = new RegExp(/[,!.?/]+/)
    var getout2 = new RegExp(/^[a-z]*[A-Z][a-z]*$/) //snakeCase
    var getout3 = new RegExp(/[.]{2,}$/) //This is the song that never ends....
   // console.log(word);
    console.log("=======================");
    for (var i = 0; i < word.length; i++) {
        word[i]= word[i].replace("-","_"); //snake-case
        word[i]= word[i].replace(getout2,"_"+word[i]);  //snakeCase
        word[i]= word[i].replace(getout3,"");  //snakeCase

       word[i]= word[i].toLowerCase().replace(getout,""); //snake case convertion
        

        //console.log(word[i]);
        //replace(/\s/g, '_')
              
        convertArray.push(word[i]);
    }
      k =convertArray.join('');
    return (k);


/*
kefalaio gramma kai opoiodipote alo
[A-Z]+ */
}


module.exports = snakeCase
