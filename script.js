function fibonacci(num) {
// your code here
	let a=0, b=1, c,i;
	for (let i = 0; i <= num;i++){
		 c=a+b;
		a=b;
		b=c;
	}
	return b;

	 
}
let num = prompt();
console.log("the  fibonacci numbers are"+ fibonacci(num));

module.exports = fibonacci;
