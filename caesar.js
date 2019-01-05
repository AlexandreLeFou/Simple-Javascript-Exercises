const caesar = function(string, shift) {
var i,j=0;
var newword=[];
word=string.split("");
var characterAscii= new RegExp("[a-zA-Z]");

wordindex = word.length -1 ;// we start from 0 


//a-z->97-122
//A-z->65-90

for (i=0;i<=wordindex;i++){
    wordloop =word[i].charCodeAt();

    finalWordIndex =wordloop+shift //abs for negative values
    if (finalWordIndex<0){finalWordIndex=Math.abs(finalWordIndex)} // if shift number is a negative
   // console.log("ok loop"+i)
 if (word[i]==characterAscii){
    if (word[i].toUpperCase() == word[i]){    
      if (finalWordIndex>90){ finalWordIndex=finalWordIndex%65+65} //if shift number is bigger than A->z numbers       
       
        newword[i] = String.fromCharCode(finalWordIndex);
    
      }else{
      //else if ((word[i].toLowerCase() == word[i])){
            if (finalWordIndex>122){ finalWordIndex=finalWordIndex%97+97} //if shift number is bigger than A->z numbers       

            newword[i] = String.fromCharCode(finalWordIndex);
          }
   }else {newword[i] = word[i]} //if it's a punctuation etc leave it as it is

  // console.log("Loop:"+i+", number:"+finalWordIndex)
    
}    
   // console.log("Old Word,New Word:"+word.join("")+"<-- and the new-->"+newword.join(""))

}



module.exports = caesar
