word='A'
inputshift= 1
var i,j=0;
var alphabetcapital=[];
var newword=[];
alphabetsmall= ['a','b','c','d','e','f','g','h','i','j','k','l',
            'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
word=word.split("");
// var regex1 = RegExp(/[a-zA-z]|\b(undefined)/);
//shift=inputshift;
wordindex = word.length -1 ;// we start from 0 
for (i=0;i<=25;i++){
   alphabetcapital[i]= alphabetsmall[i].toUpperCase()}



do{
for (i=0;i<=25;i++){

   check=i+inputshift;
   if (check>=0 && check<=25){shift=inputshift}
   if (check<0){shift=Math.abs(inputshift)}
   if (check>25) {shift=(check%25) }
    

        if (word[wordindex]==alphabetsmall[i]){
            newword[j]=alphabetsmall[shift]
            j=j+1
            break
            //console.log(j);
        }else if (word[wordindex]==alphabetcapital[i]){
            newword[i]=alphabetcapital[shift]
            j=j+1
            break
        }else{ // (!regex1.test(word[i])){ //[^a-zA-z] not a-z,A-Z   or  undifined
            newword[wordindex]=word[i]
            j=j+1
            }
                }
    wordindex --
    }while(wordindex>0)