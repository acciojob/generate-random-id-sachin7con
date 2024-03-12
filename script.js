function makeid(l) {
  //SGN write your code here
	let alphNumeric = "abcdefghijklmnopqrSTUVWXYZ0123456789";
	let str ="";
	for(let i=0; i<l; i++){
		str += alphNumeric.charAt(Math.random() *10);
	}
	
	return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
