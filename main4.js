// 표준 내장 객체

// 문자
const str1 = 'Hello world!'
console.log(str1.includes('Hello', 1))  // false - 1번째(2번째) 문자열부터 포함되어 있나

console.log(str1.padEnd(15, '0'))       // Hello world!000 - 10보다 문자열이 짧으면 뒤에 '0' 을 길이 10될때까지 붙임
console.log(str1)                       // Hello world!

console.log(str1.padStart(15, '0'))     // 000Hello world! - 10보다 문자열이 짧으면 앞에 '0' 을 길이 10될때까지 붙임

console.log(str1.slice(6, -1))          // 6번째부터 뒤에서 -1까지
console.log(str1.slice(6))              // 6번째부터 끝까지

console.log(str1.split('').reverse().join(''))  // ''로 구분하고 거꾸로 뒤집은뒤 다시 결합

// 숫자
const num1 = 3.1415926535
console.log(num1.toFixed(2))                 // 문자열
console.log(parseFloat(num1.toFixed(2)))     // 숫자

const num2 = 1000000.123
console.log(num2.toLocaleString())              // 문자
console.log(`${num2.toLocaleString()}원`)

const testEl = document.getElementById('test')
testEl.innerHTML = num2.toLocaleString()

console.log('testEl.innerText >> ', testEl.innerText)   //  int2Amt 필요없네...

const num2Str = num2 + '';
console.log(typeof num2Str)
console.log(Number.parseInt(num2Str))   // 정수(숫자)로 변환, 숫자를 넣어도 됨
console.log(typeof Number.parseInt(num2Str, 10))    // 두번째 인수는 몇진수인지,  default 10진수

console.log(Number.parseFloat(num2Str))

// 수학
console.log(Math.ceil(3.14159265))  // 올림
console.log(Math.floor(3.14159265)) // 내림
console.log(Math.round(3.14159265))

console.log(Math.pow(4, 2)) // 제곱

function random(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min)) + min    // Math.random() - 0이상 1미만 난수 반환
}

console.log(random())
console.log(random(11, 20))

// 날짜
Date.prototype.isAfter = function (data) {
    const a = this.getTime()        // unix time 이후부터 경과한 시간을 밀리초 단위로 반환
    const b = this.getTime()
    return a > b
}