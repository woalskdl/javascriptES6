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

// 배열
const arrAt = ['A', 'B', 'C']
console.log(arrAt.at(-1)) // C - 음수면 뒤에서부터 인덱싱

const arrEvery = [1, 2, 3, 4]
const isValidEvery = arrEvery.every(item => item < 5)

console.log(isValidEvery)   // true - 모든 요소가 조건을 만족하는지 확인

const arrFilter = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = arrFilter.filter(number => number < 30)

console.log(filteredNumbers)    // [1, 20, 7, 9, 0] - 조건을 만족하는 요소 반환

const arrFind = [5, 8, 130, 12, 44]
const foundItem = arrFind.find(item => item > 10)

console.log(foundItem)  // 130 - 조건을 만족하는 첫번째 요소 반환

const foundIdx = arrFind.findIndex(item => item > 10)
console.log(foundIdx)   //  2 - 조건을 만족하는 첫번째 요소의 인덱스 반환

const arrFlat1 = [1, 2, [3, 4]]
console.log(arrFlat1.flat()) // [1, 2, 3, 4] - 배열의 모든 하위 배열을 지정한 깊이(Depth) 까지 이어붙인 새로운 배열 생성

const arrFlat2 = [1, 2, [3, 4, [5, 6]]]

console.log(arrFlat2.flat())    // [1, 2, 3, 4, [5, 6]] - default : 1
console.log(arrFlat2.flat(2))   // [1, 2, 3, 4, 5, 6]
console.log(arrFlat2.flat(Infinity))    // [1, 2, 3, 4, 5, 6] - 배열 깊이에 상관없이 모든 배열을 flat 하게

const arrForEach = ['A', 'B', 'C']

let i = 0;
arrForEach.forEach(item => {
    if (i > 1)
        return false

    console.log(item)
    i += 1
})

const arrJoin = ['Apple', 'Banana', 'Cherry']
console.log(arrJoin.join(', ')) // Apple, Banana, Cherry

const arrMap = [
    { name : 'Neo', age : 70},
    { name : 'Amy', age : 22},
    { name : 'Lewis', age : 11}
]

const newArrMap = arrMap.map(user => ({ // 객체 데이터를 바로 반환할 경우 객체를 ()로 감싼다
    ...user,
    isValid : true,
    email : null
}))
// 또는 user => { return {데이터} }
console.log(newArrMap)

const arrPopPush = ['Apple', 'Banana', 'Cherry']

console.log(arrPopPush.pop())   // Cherry - 마지막 요소를 제거하고 그 요소를 반환.
console.log(arrPopPush)         // ['Apple', 'Banana'] - 원본이 변경됨

console.log(arrPopPush.push('Orange', 'Mango'))  // push한 길이 반환
console.log(arrPopPush)                 // ['Apple', 'Banana', 'Orange', 'Mango']

const arrReduce = [1, 2, 3]
const reduceSum = arrReduce.reduce((accumulator, currentValue) => { // accumulator - 초기값 / currentValue - 대상 배열의 첫번째 값
    return accumulator + currentValue
}, 0)   // 초기값 > accumulator 에 할당

const reduceSum2 = arrReduce.reduce((acc, cur) => acc + cur, 0)

console.log(reduceSum)  // 6 - 대상 배열의 길이만큼 콜백을 실행하고, 마지막에 호출되는 콜백의 결과값을 반환 / 각 콜백의 반환값은 다음 콜백으로 전달됨
console.log(reduceSum2)

const usersReduce = [
    { name : 'Neo', age : 70},
    { name : 'Amy', age : 22},
    { name : 'Lewis', age : 11}
]

const totalAge = usersReduce.reduce((acc, cur) => acc + cur.age, 0)
console.log(totalAge)   // 103
console.log(`평균 나이 : ${(totalAge / usersReduce.length).toFixed(1)}세`) // 평균 나이 : 34.3세

const namesArr = usersReduce.reduce((acc, cur) => {
    acc.push(cur.name)
    return acc
}, [])
console.log(namesArr.join(', '))    // Neo, Amy, Lewis

const arrReverse = ['A', 'B', 'C']
const reversed = arrReverse.reverse()

console.log(arrReverse) // ['C', 'B', 'A'] - 원본도 바뀜
console.log(reversed)   // ['C', 'B', 'A']

const arrShift = ['A', 'B', 'C']

console.log(arrShift.shift())   // A - 첫번째 요소를 제거하고 반환 <> pop
console.log(arrShift)           // ['B', 'C'] - 원본도 바뀜

const arrSome = [1, 2, 3, 4]
const someIsValid = arrSome.some(item => item > 3)

console.log(someIsValid)    // true - 하나 이상의 요소가 참인지 확인

const arrSort = [4, 17, 2, 103, 3, 1, 0]

arrSort.sort()  // 콜백 없으면 요소를 문자열 기준으로 유니코드 코드 포인트 순서로 정렬
console.log(arrSort)    // [0, 1, 103, 17, 2, 3, 4]

arrSort.sort((a, b) => a - b)
console.log(arrSort)    // [0, 1, 2, 3, 4, 17, 103]

arrSort.sort((a, b) => b - a)
console.log(arrSort)    // [103, 17, 4, 3, 2, 1, 0]

const arrSplice = ['A', 'B', 'C']
arrSplice.splice(2, 0, 'X') // 1 - 인덱스, 2 - 삭제하고자 하는 갯수, 3 - 넣을 데이터

console.log(arrSplice)  // ['A', 'B', 'X', 'C']

arrSplice.splice(1, 2)
console.log(arrSplice)  // ['A', 'C'] - 2개 제거하기만 함

const arrUnshift = ['A', 'B', 'C']

console.log(arrUnshift.unshift('X'))    // 4 - 맨앞에 추가하고 길이 반환 <> push
console.log(arrUnshift)                 // ['X', 'A', 'B', 'C']

const arrayLike = {
    0 : 'A',
    1 : 'B', 
    2 : 'C',
    length : 3
}   // 배열 같은 객체

console.log(arrayLike.constructor === Array)    // false
console.log(arrayLike.constructor === Object)   // true

// arrayLike.forEach(item => console.log(item)) // 배열이 아니기 때문에 에러남
Array.from(arrayLike).forEach(item => console.log(item))    // 객체가 배열의 요소가 없으면 동작하지 않음
console.log(Array.isArray(arrayLike))   // false 근데 배열은 아님

// 객체
const targetObj = {a: 1, b: 2}
const sourceObj1 = {b: 3, c: 4}
const sourceObj2 = {c: 5, d: 6}
const resultObj = Object.assign(targetObj, sourceObj1, sourceObj2)
// 하나 이상의 source 객체를 target 객체로 속성을 복사하고 대상 객체를 반환한다.
console.log(targetObj)  // {a: 1, b: 3, c: 5, d: 6}
console.log(resultObj)  // {a: 1, b: 3, c: 5, d: 6}

const resultObj2 = Object.assign({}, targetObj, sourceObj1, sourceObj2)
console.log(resultObj2) // {a: 1, b: 3, c: 5, d: 6}

const resultObj3 = {
    ...targetObj,
    ...sourceObj1,
    ...sourceObj2
}

console.log(resultObj3) // {a: 1, b: 3, c: 5, d: 6}

const userEntry = {
    name : 'Jay',
    age : 30,
    isValid : true,
    email : 'woalskdl@gmail.com'
}

// 주어진 객체의 각 속성과 값으로 하나의 2차원 배열을 만들어 반환
console.log(Object.entries(userEntry))  // [['name', 'Jay'], ['age', 30], ...]

for (const [key, value] of Object.entries(userEntry)) {
    console.log(key, value) // name Jay \n age 30 \n ... 
}

console.log(Object.keys(userEntry)) // ['name', 'age', 'isValid', 'email'] - Object의 key 를 배열로 반환
console.log(Object.values(userEntry)) // ['Jay', 30, true, 'woalskdl@gmail.com'] - Object의 value 를 배열로 반환

// JSON
// 문자열은 ""만 사용
console.log(JSON.parse('"Hello world!"'))   // Hello world! - 문자열은 ""가 있어야함. ''를 제거할 경우 JSON parsing 에러

import abc from './test.json'
console.log(abc)    // {a: 1, b: 'B'}