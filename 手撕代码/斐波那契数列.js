const result=[];
function fibo(n){
        if(n === 0){
            return 1;
        }
        if(n === 1){
            return 1;
        }
        if(n > 1){
            result[n] = arguments.callee(n-1) + arguments.callee(n-2);
            return result[n];
        }
    }

console.log(fibo(4))

