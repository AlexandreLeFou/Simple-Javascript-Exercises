word='aaaAAA'
inputshift= 555
var i,check,j=0;
var newword=[];
word=word.split("");
var characterAscii= new RegExp("[a-zA-Z]");

wordindex = word.length -1 ;// we start from 0 


//a-z->97-122
//A-z->65-90

for (i=0;i<=wordindex;i++){
    wordloop =word[i].charCodeAt();

    finalWordIndex =wordloop+inputshift //abs for negative values
 if (finalWordIndex<0){finalWordIndex=Math.abs(finalWordIndex)} // if shift number is a negative
    console.log("---> word loop:"+i)
    
 if (characterAscii.test(word[i])){
    if (word[i].toUpperCase() == word[i]){    
      while (finalWordIndex>90){ finalWordIndex=finalWordIndex%90} //if shift number is bigger than a->z numbers       
       finalWordIndex += 65;
        newword[i] = String.fromCharCode(finalWordIndex);
    
      }else{
      //else if ((word[i].toLowerCase() == word[i])){
            while (finalWordIndex>122){ finalWordIndex=finalWordIndex%122} //if shift number is bigger than A->z numbers       
            finalWordIndex += 97;
            newword[i] = String.fromCharCode(finalWordIndex);
          }
   }else {newword[i] = word[i]} //if it's a not a char leave it as it is

   console.log("Loop:"+i+", number:"+finalWordIndex)
    
}    
    console.log("Old Word,New Word:"+word.join("")+"<-- and the new-->"+newword.join(""))
