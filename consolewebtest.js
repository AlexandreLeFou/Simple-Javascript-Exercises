word='Aaa'
inputshift= 1
var i,j=0;
var alphabetcapital=[];
var newword=[];
alphabetsmall= ['a','b','c','d','e','f','g','h','i','j','k','l',
            'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
word=word.split("");
// var regex1 = RegExp(/[a-zA-z]|\b(undefined)/);
//shift=inputshift;
wordindex = word.length ;// we start from 0 
for (i=0;i<=25;i++){
   alphabetcapital[i]= alphabetsmall[i].toUpperCase()}



do{
for (i=0;i<=25;i++){

   check=i+inputshift+1; 
   if (check>=1 && check<=26){shift=inputshift}
   if (check<0){shift=Math.abs(inputshift)}
   if (check>26) {shift=(check%26)-1 }
    

        if (word[wordindex]===alphabetsmall[i]){
            console.log(word[i],"small",wordindex,i)
            newword[j]=alphabetsmall[i+shift]
            j=j+1}

            //console.log(j);
        if (word[wordindex]===alphabetcapital[i]){
            console.log(word[i],"capital",wordindex,i)
            newword[i]=alphabetcapital[i+shift]
            j=j+1}
           
        if (88==24){ // (!regex1.test(word[i])){ //[^a-zA-z] not a-z,A-Z   or  undifined
            console.log(word[i],"something else",wordindex,i)
            newword[wordindex]=word[i]
            j=j+1}
            }
                
    wordindex = wordindex-1;
}while(wordindex>=0);