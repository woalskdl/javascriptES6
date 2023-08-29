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