
// 1. JS 데이터
console.log('=============== JS 데이터 ================')

const string1 = 'hello'
const string2 = `hello ${string1} ?!`   // 템플릿 리터럴 - 기호

console.log(string2);

const number = 123
const pi = .14
console.log(number + undefined);
console.log(typeof (number + undefined));
console.log(typeof pi)

const a = 0.1
const b = 0.2

console.log(a + b) // 0.30000000000000004 > 컴퓨터 2진수 계산법의 한계
console.log((a + b).toFixed(1)) // 0.3
console.log(typeof (a + b).toFixed(1)) // string
console.log(typeof Number((a + b).toFixed(1))) // number

const fruits = new Array('Apple', 'Banana', 'Cherry');

console.log("fruit >> ", fruits)

const fruits2 = ['Apple', 'Banana', 'Cherry']; // 배열 리터럴 방식으로 생성

console.log("fruits2 >> ", fruits2)

const user = new Object();
user.name = 'jay';
user.age = 30;

console.log(user)

function User() {
    this.name = 'jay2'
    this.age = '31'
}

const user2 = new User();
console.log('user2 >> ', user2)
console.log(user.name);
console.log(user['name'])

function hello() {
    return 'hello!';
}

console.log(hello) // 함수를 호출하는게 아닌 변수로서 취급
console.log(hello()) // 함수를 호출
console.log(typeof hello)   // function
console.log(typeof hello()) // string

const aFunction = function() {
    console.log('A');
}

const bFunction = function(c) {
    console.log(c)
    if (typeof c === 'function')
        c()
}

bFunction (123)
bFunction(aFunction)

if (123) {
    console.log('참!')
}

if (0) {
    console.log('참!!') // 안나옴
    // 1) false
    // 2) 0
    // 3) null
    // 4) undefined
    // 5) NaN
    // 6) '' (빈 문자열)
    // 7) 0n (BigInt)
}

console.log(typeof undefined === 'undefined')   // true
console.log(typeof null === 'object')           // true
console.log(typeof [] === 'object')             // true
console.log(typeof {} === 'object')             // true

console.log([].constructor === Array)           // Array 라는 javascript의 전역 함수
console.log({}.constructor === Object)          // Object 라는 javascript의 전역 함수
// console.log(null.constructor)                   // 문법 오류

console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null');

function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null))        // Null
console.log(checkType([]));         // Array
console.log(checkType({}));         // Object
console.log(checkType(undefined))   // Undefined
console.log(checkType(() => {}))    // Function

// 2. 연산자와 구문
console.log('============= 연산자와 구문 ==============')

console.log(!0)         // true
console.log(!!0)        // false
console.log(!null)      // true
console.log(!undefined) // true
console.log(!NaN)       // true
console.log(!'')        // true