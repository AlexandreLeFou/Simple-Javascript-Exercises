const caesar = function(word,inputshift) {
    var i,j=0;
    var alphabetcapital=[];
    var newword=[];
    alphabetsmall= ['a','b','c','d','e','f','g','h','i','j','k','l',
                'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
    word=word.split("");
    var regex1 = RegExp(/[a-zA-z]|\b(undefined)/);
    shift=inputshift;
    for (i=0;i<=25;i++){
       alphabetcapital[i]= alphabetsmall[i].toUpperCase()}




    for (i=0;i<=25;i++){

       check=i+inputshift;
       if (check>=0 && check<=25){shift=inputshift}
       if (check>25) {shift=i+inputshift-25}
       if (check<0){shift=Math.abs(inputshift)}


            if (word[i]==alphabetsmall[i]){
                newword[j]=alphabetsmall[i+shift]
                j++
                console.log(j);
            }else if (word[i]==alphabetcapital[i]){
                newword[j]=alphabetcapital[i+shift]
                j++
            }else if (!regex1.test(word[i])){ //[^a-zA-z] not a-z,A-Z   or  undifined
                newword[j]=word[i]
                j++ }
                    }

                    return(newword.join(''))
                   // return(newword[0])







}



module.exports = caesar
