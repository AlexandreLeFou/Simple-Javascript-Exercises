word='aaa,jAAA'
inputshift= 13
var i,j=0,finalWordIndex=0;
var newword=[];
word=word.split("");
var characterAscii= new RegExp("[a-zA-Z]");

var wordindex = word.length -1 ;// we start from 0 


//a-z->97-122
//A-z->65-90

for (i=0;i<=wordindex;i++){
  finalWordIndex =word[i].charCodeAt();

  console.log("---> word loop:"+i)

 if (characterAscii.test(word[i])){
 
  if (finalWordIndex<0){finalWordIndex=Math.abs(finalWordIndex)} // if shift number is a negative
  
    if (word[i].toUpperCase() == word[i]){
      if (finalWordIndex>=65 && finalWordIndex<=90){
        finalWordIndex = (((finalWordIndex - 65 + inputshift) % 26) + 65);
      }

    }else{
     if (finalWordIndex>=97 && finalWordIndex<=122){
      finalWordIndex = (((finalWordIndex - 97 + inputshift) % 26) + 97);
    }
    }
    newword[i] = String.fromCharCode(finalWordIndex);
  }else{
  newword[i] = word[i]; //if it's a not a char leave it as it is
  }
   console.log("Loop:"+i+", number:"+finalWordIndex)
    
}    
    console.log("Old Word,New Word:"+word.join("")+"<-- and the new-->"+newword.join(""))
