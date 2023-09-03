
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

// 논리 (Logical)
console.log(1 & 0)  // 0
console.log('A' && 'B' && '')   // ''
console.log('A' && 'B' && 'C')  // 'C'

console.log(0 || 1) // 0
console.log(false || 0 || {})   // {}
console.log(false || 0 || NaN)  // NaN

// Nullish 병합
const n = 0
const num1 = n || 8
console.log(num1)   // 8

// null, undefined 가 아니면 반환
const num2 = n ?? 8
console.log(num2)   // 0
console.log(null ?? 0)  //  0
console.log(undefined ?? 0) // 0
console.log(null ?? undefined)  // undefined
console.log(null ?? 1 ?? 2) // 1

// 전개 연산자(Spread Operator)
const arr1 = [1, 2, 3]
console.log(...arr1)   // 1 2 3

const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2)
console.log(arr3)

const arr4 = [arr1, arr2]
console.log(arr4)   // [[1, 2, 3], [4, 5, 6]]

const arr5 = [...arr1, ...arr2]
console.log(arr5)   // [1, 2, 3, 4, 5, 6]

const obj1 = { x : 1, y : 2 }
const obj2 = { y : 3, z : 4 }

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)   // { x : 1, y: 3, z : 4 }

const obj4 = {...obj1, ...obj2}
console.log(obj4)   // { x : 1, y: 3, z : 4 }

function fn(x, y, z) {
    console.log(x, y, z)
}

fn(...arr1) // 1 2 3

// 구조 분해 할당 (Destructuring assignment)
const array = [99, 22, 33]
const [a1, b1, c1] = array

console.log(a1, b1, c1) // 99 22 33

let a2 = 0
let b2 = 0
let c2 = 0
;[a2, b2, c2] = array

console.log(a2, b2, c2) // 99 22 33

let a3 = 0
let b3 = 0
let c3 = 0
;[, b3, c3] = array

console.log(a3, b3, c3) // 0 22 33

const array2 = [1, 2, 3]
const [a4, ...rest] = array2

console.log(a4, rest)   // 1 [2, 3]

const object = {
    aa : 1,
    bb : 2,
    cc : 3,
    xx : 7
}

const {aa, bb} = object
console.log(aa, bb) // 1 2
const {cc} = object
console.log(cc)     // 3

const { xx = 4 } = object
console.log(xx)     // 7 (object에 xx가 지정되어있지 않다면 4)

const {aa : jay} = object
console.log(jay)    //  1 (변수명을 변경함)

const {yy : ten = 10} = object
console.log(ten)

const {aa : aa1, ...rest2} = object
console.log(rest2)  // {bb: 2, cc: 3, xx: 7}

// 선택적 체이닝 (Optional Chaning)
const usr = undefined   // null도 마찬가지
console.log(usr?.name ?? '존재하지 않습니다.')  // undefined >> 존재하지 않습니다.
console.log(usr?.name || '존재하지 않습니다.')  // 존재하지 않습니다.

// Switch
function price(fruit) {
    switch (fruit) {
        case 'Apple':
            return 1000
        case 'Banana':
            return 1000
        case 'Cherry':
            return 1000
        default:
            return 0
    }
}

console.log(price('Apple'))
console.log(price('hello'))

// for
const userObj = {
    name : 'jay',
    age : 30,
    isValid : true,
    email : 'woalskdl@gmail.com'
}

for (const key in userObj) {    // 순서 X
    console.log(key)
    console.log(userObj[key]);
}

// Do while
let nn = 0
do {console.log(nn)} while (nn) // 일단 한번 실행하고 검사