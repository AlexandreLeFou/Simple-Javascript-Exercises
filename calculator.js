function add (x,y) {
	return(x+y);
}

function subtract (x,y) {
	return(x-y);
}

function sum (array) {
	return(array.reduce((acc,val)=>acc+val,0));
	//https://www.youtube.com/watch?v=-LFjnY1PEDA
}

function multiply (array) {
	return(array.reduce((acc,val)=>acc*val,1));
}

function power(x,y) {
	return(Math.pow(x,y));
}

function factorial(x) {
	
	if (x==0){return(1);}
	else{
	return(x*factorial(x-1));}
	//https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

