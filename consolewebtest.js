word='Aaa BbC'
inputshift= 26
var i,check,j=0;
var newword=[];
word=word.split("");

wordindex = word.length -1 ;// we start from 0 


//a-z->97-122
//A-z->65-90

for (i=0;i<=wordindex;i++){
    wordloop =word[i].charCodeAt()

    finalWordIndex =wordloop+inputshift //abs for negative values
    if (finalWordIndex<0){finalWordIndex=Math.abs(finalWordIndex)} // if shift number is a negative

    console.log("ok")

    if (word[i].toUpperCase() == word[i]){    
  // if (word[i].charCodeAt(0)>=65 && word[i].charCodeAt(0)<=122){newword[i] = charAt(word[i+check])} //if string is a-z or A-Z regarding dec value
        if (finalWordIndex>90){ finalWordIndex=finalWordIndex%65+65} //if shift number is bigger than A->z numbers       


        
        newword[i] = String.fromCharCode(finalWordIndex);
    
    }else if ((word[i].toLowerCase() == word[i])){
            if (finalWordIndex>122){ finalWordIndex=finalWordIndex%97+97} //if shift number is bigger than A->z numbers       

            newword[i] = String.fromCharCode(finalWordIndex);


   }else {newword[i] = word[i]} //if it's a punctuation etc leave it as it is

   console.log("Loop:"+i+", number:"+finalWordIndex)
    
}    
    console.log("Old Word,New Word:"+word.join("")+"<-- and the new-->"+newword.join(""))
