let num=5;
function fibonacci(num) {
    let a = 0, b = 1, result;
    if (num == 1) {
        return 0;
    } else if (num == 2) {
        return 1;
    } else {
        for (let i = 3; i <= num; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        return b;
    }
}
console.log("the fibonacci number is "+fibonacci(num))
module.exports = fibonacci;



