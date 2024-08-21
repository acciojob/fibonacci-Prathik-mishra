function fibonacci(num) {
// your code here
	let a=0, b=1, result;
	if(num == 0){
		return a;
	}
	for (let i = 2; i <= num;i++){
		 result=a+b;
		a=b;
		b=result;
	}
	return b;
}
let num = prompt();
console.log("the  fibonacci numbers are"+ fibonacci(num));

module.exports = fibonacci;
