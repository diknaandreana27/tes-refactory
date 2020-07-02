function reverse(param){
	var x = param.length, y = '';
	while(x > 0){
		y += param[x - 1];
		x--;
	}
	return y;
}

var word = "kasur ini rusak";// kata yang mengandung unsur palindom
// var word = "kasur itu hanyut"; //kata yang bukan
if(word === reverse(word)){
	document.write("Kata `"+word+"` termasuk kata Palindrome.");
}
else{
	document.write("Kata `"+word+"` termasuk bukan kata Palindrome.");
}