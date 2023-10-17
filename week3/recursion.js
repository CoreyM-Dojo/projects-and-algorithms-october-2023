const example = [1,2,3,4,5];

function outer (arr) {
    const cache = {}
    return function(arr) {

        console.log(cache);
        if (arr in cache) {
            return cache[arr];
        }

        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum+=arr[i]
        }   

        cache[arr] = sum;
        return sum;
    }
}

const memoiZedSum = outer()


const findAvg = (arr) => {
    return memoiZedSum(arr)/arr.length;
}

// console.log(findAvg(example));

const rSum = (arr, index=0, sum=0) => {
    // break case
    // running logic
    if (index > arr.length -1) {
        return sum
    }
    // recursive function call
    return rSum(arr, index+1, sum+=arr[index])
}

// console.log(rSum(example));

// fibonnacci
// [0,1,1,2,3,5,8,13,21]
const memoize = (func) => {
    cache = {}
    return func;
}
function fib(n) {

    console.log(cache);
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (n in cache) {
        return cache[n]
    }

    result = fib(n-1) + fib(n-2)
    cache[n] =  result;
    return result;
}

function factory(num) {
    return function multiply(n,m=num) {
        return n*m;
    }
}

const multiplyBy10 = factory(10);

console.log(multiplyBy10(10));





memoizedFib = memoize(fib)

// memoizedFib(5);
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(100));
// console.log(memoizedFib(200));

// memoizedFib(10);
// memoizedFib(10);

// console.log(fib(10))

