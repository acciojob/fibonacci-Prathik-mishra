let num=1;
function fibonacci(num) {
// your code here
	let a=0, b=1, result;
	if(num === 0 || num === 1){
		console.log(a);
       }
       else{
   
	for (let i = 2; i <= num;i++){
		 result=a+b;
		a=b;
		b=result;
	}
	console.log(b);
}
}
fibonacci(num);




