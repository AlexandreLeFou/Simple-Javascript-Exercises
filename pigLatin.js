// Rule 1: If a word begins with a vowel sound, add an "ay" 
//sound to the end of the word.

// Rule 2: If a word begins with a consonant sound, move it to the end of the word, 
//and then add an "ay" sound to the end of the word.

function translate(testSentece) {

//eng vowels A, E, I, O, U, and sometimes Y can be considered a vowel.
var newSentence  = testSentece.split('');
var vowels = {A, E, I, O, U, Y}
var consonant = {B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z}


for (i=0;i<=vowels.length;i++){ //Rule 1
	if (newSentence[0]==vowels[i]){
		newSentence.push('ay')
		break
	}


	if (newSentence[0]==consonant[i]){//Rule 2
		let temp = newSentence.shift() //remove 1st element
		newSentence.push(temp) //move the 1st element to the end
		newSentence.push('ay') //add an 'ay' at the end of the word
		break
	}

}
return newSentence.join()
}



module.exports = {
	translate
}
