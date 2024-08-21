let num=1;

function fibonacci(num) {
// your code here
	let a=0, b=1, result;
	if(num === 0 || num === 1){
		return a;
       }
       else{
        for (let i = 2; i <= num;i++){
		 result=a+b;
		 a=b;
		 b=result;
	 }
	 return b;
   }
}
console.log(fibonacci(num));




