// 함수

// 호이스팅 (Hoisting) - 함수 구현부가 호출하는 부분 아래에 있어도 호출이 가능

hello()

function hello() {
    console.log('Hello')
}

// 아래는 에러
// hello2()

// const hello2 = function() {
//     console.log('Hello2')
// }

// 이름 바뀜
const world = function hello2() {
    console.log('Hello2')
}

world();

// 매개변수 패턴 (Parameter Pattern)
// 기본값
function sum(a, b = 1) {
    return a + b
}

console.log(sum(7))

const user = {
    name : 'jay',
    age : 30
}

function getEmail({email = '이메일이 없습니다.'}) {
    return email
}

console.log(getEmail(user))

// 나머지 매개변수
function sum2(...rest) {
    console.log(arguments)      // 자바스크립트 기본 지원 parameter - array like / 잘 쓰지는 않는다
    return rest.reduce(function(acc, cur) {
        return acc + cur
    }, 0)
}

console.log('sum(1, 2) >> ', sum2(1, 2))
console.log('sum(1, 2, 3, 4, 5, 6) >> ', sum2(1, 2, 3, 4, 5, 6))

// 화살표 함수
const pointSum = (a, b) => a + b
console.log(pointSum(1, 2))

const pointC = x => {console.log(x)}    // 매개변수가 한개면 괄호 생략 가능. 2개 이상은 안됨
const pointH = () => ({ a : 1 })        // 객체를 return 하고자할 때는 function 의 {} 와 중복되어 ()로 감싸준다.

console.log(pointH());

// 즉시실행함수(IIFE, Immediately-Invoked Funcion Expression)
const iife = 7;     // 세미콜론 붙여줘야 다음 줄로 넘어가서 해석되지 않는다.
(() => {
    console.log(iife * 2)
}) ()

// 즉시실행함수 표현방법들
;(() => { console.log(iife * 2) }) ()          // (F)()
;(function() { console.log(iife * 2) }) ()     // (F)()
;(function() { console.log(iife * 2) }())      // (F())
;!function() { console.log(iife * 2) }()       // !F()
;+function() { console.log(iife * 2) }()       // +F()

;((a, b) => {
    console.log(a)
    console.log(b)
})(1, 2)

// 재귀(Recursive)
let recurI = 0;
const recurA = () => {
    console.log('A')
    recurI += 1
    if (recurI < 4)
        recurA()
}

recurA()

const recurAA = { name : 'A', parent : null}
const recurBB = { name : 'A', parent : recurAA}
const recurCC = { name : 'A', parent : recurBB}
const recurDD = { name : 'A', parent : recurCC}

const getRoot = user => {
    if (user.parent)
        return getRoot(user.parent)

    return user
}

console.log(getRoot(recurDD))

// 호출 스케일링(Scheduling a function call)
const schHello = () => {
    console.log('Hello~')
}

const timeout = setTimeout(schHello, 2000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    console.log('click')
    clearTimeout(timeout)
})

const interval = setInterval(schHello, 1000)
h1El.addEventListener('click', () => {
    console.log('click2')
    clearInterval(interval)
})

clearTimeout(timeout)
clearInterval(interval)

// this
//// 일반 함수의 this는 호출 위치에서 정의
//// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

const functionUser = {
    firstName : 'jay',
    lastName : 'Nam',
    age : 30,
    getFullName : function () {
        return `${this.firstName} ${this.lastName}`
        // return `${thisUser.firstName} ${thisUser.lastName}`  // 동일한 결과
    }
}

const thisUser = {
    firstName : 'jay',
    lastName : 'Nam',
    age : 30,
    getFullName : () => {
        return `${this.firstName} ${this.lastName}`
        // return `${thisUser.firstName} ${thisUser.lastName}`  // 동일한 결과
    }
}


console.log(functionUser.getFullName())
console.log(thisUser.getFullName())     // undefined

function thisUsr() {
    this.firstName = 'Neo'
    this.lastName = 'Anderson'

    return {
        firstName : 'jay',
        lastName : 'Nam',
        age : 30,
        getFullName : () => {
            return `${this.firstName} ${this.lastName}`
            // return `${thisUser.firstName} ${thisUser.lastName}`
        }
        // 일반함수 아래와 같이 표현도 가능 (화살표 함수 아님)
        // getFullName() => {
        //     return `${this.firstName} ${this.lastName}`
        //     // return `${thisUser.firstName} ${thisUser.lastName}`
        // }
    }
}

const lewis = {
    firstName : 'Lewis',
    lastName : 'Yang'
}

const thisU = thisUsr()
console.log(thisU.getFullName())            // Neo Anderson
console.log(thisU.getFullName.call(lewis))  // Neo Anderson (선언된 함수에서 값을 참조하므로) / 일반함수 일 경우 Lewis Yang

const thisTimer = {
    title : 'TIMER!',
    timeout() {
        console.log(this.title)
        setTimeout(() => {
            console.log(this.title)
        }, 1000)    // setTimeout 파라미터를 일반함수로 호출시 title에 대한 선언을 알 수 없다. / 화살표 함수이기 때문에 현재 선언된 함수에서 this 값을 참조
    }
}

thisTimer.timeout()