// 클래스

// prototype
const prtFruits = new Array('Apple', 'Banana', 'Cherry')

// 메소드 등록
Array.prototype.myFunction = function () {
    console.log(this)
}

prtFruits.myFunction()

const prtJay = {
    firstName : 'Jay',
    lastName : 'Nam',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const prtNeo = {
    firstName : 'Neo',
    lastName : 'Anderson'
}

console.log(prtJay.getFullName.call(prtNeo))    // 호출하는 위치가 neo 가 됨

function PrtUser(first, last) { // 대문자로 시작해야함 - 일종의 생성자 정의 > new 와 함께 호출
    this.firstName = first
    this.lastName = last
}

PrtUser.prototype.getFullName = function () {   // 화살표 X
    return `${this.firstName} ${this.lastName}`
}

const prtJay2 = new PrtUser('Jay', 'Nam')
const prtNeo2 = new PrtUser('Neo', 'Anderson')

console.log(prtJay2)
console.log(prtNeo2)
console.log(prtJay2.getFullName())
console.log(prtNeo2.getFullName())

// ES6 class
// 일반적인 방식
function PreEs6User(first, last) {
    this.firstName = first
    this.lastName = last
}

PreEs6User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
};

// ES6 부터
class Es6User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }

    getFullName() {
        console.log('Getting full name1')
        return `${this.firstName} ${this.lastName}`
    }

    // getter
    get fullName() {
        console.log('Getting full name2')
        return `${this.firstName} ${this.lastName}`
    }

    // setter
    set fullName(value) {
        console.log(value)
        ;[this.firstName, this.lastName] = value.split(' ')
    }

    static isUserTrue() {
        return true
    }

    static isUser(user) {
        if (user.firstName && user.lastName) {
            return true
        }

        return false
    }
}

const es6Jay = new Es6User('Jay', 'Nam');

console.log(es6Jay)
console.log(es6Jay.getFullName())

// Getter, Setter
console.log(es6Jay.fullName)

es6Jay.fullName = 'Jay Nam2'
console.log('after setter >> ', es6Jay);

// 정적 메소드 <> prototype 메소드 (클래스 자체가 아닌 인스턴스에서 사용하는 메소드)

// Es6User.getFullName() // 에러
console.log(Es6User.isUserTrue())       // true
// console.log(es6Jay.isUserTrue())     // 에러
console.log(Es6User.isUser(es6Jay))     // true

// 상속 (Inheritance)
class InhVehicle {
    constructor(acceleration = 1) {
        this.speed = 0
        this.acceleration = acceleration
    }

    accelerate() {
        this.speed += this.acceleration
    }
    decelerate() {
        if (this.speed <= 0) {
            console.log('정지!')
            return
        }

        this.speed -= this.acceleration
    }
}

class Bicycle extends InhVehicle {
    constructor(price = 100, acceleration) {
        super(acceleration)
        this.price = price
        this.wheel = 2
    }
}

const inhBicycle = new Bicycle(300, 2)
console.log('inhBicycle >> ', inhBicycle)

class Car extends Bicycle { 
    constructor(license, price, acceleration) {
        super(price, acceleration)
        this.license = license
        this.wheel = 4
    }

    // overriding
    accelerate() {
        if (!this.license) {
            console.error('무면허!')
            return
        }

        this.speed += this.acceleration
        console.log('가속!', this.speed)
    }
}

const inhCarA = new Car(true, 7000, 10)
const inhCarB = new Car(false, 4000, 6)

console.log('inhCarA >> ', inhCarA)
console.log('inhCarB >> ', inhCarB)

inhCarA.accelerate();
inhCarB.accelerate();

console.log('after accelerate inhCarA >> ', inhCarA)
console.log('after accelerate inhCarB >> ', inhCarB)

class Boat extends InhVehicle {
    constructor(price, acceleration) {
        super(acceleration)
        this.price = price
        this.motor = 1
    }
}

const inhBoat = new Boat(10000, 5)
console.log('inhBoat >> ', inhBoat)

console.log(inhBicycle instanceof Bicycle)  // inhBicycle 변수가 Bicycle 클래스의 인스턴스인가?
console.log(inhBicycle instanceof InhVehicle)   // true
console.log(inhBoat instanceof Bicycle)         // false

// instanceof 와 constructor
class A {
    constructor() {

    }
}
class B extends A {
    constructor() {
        super()
    }
}
class C extends B {
    constructor() {
        super()
    }
}

const a = new A();
const b = new B();
const c = new C();

console.log(c.constructor === A)    // false
console.log(c.constructor === B)    // false
console.log(c.constructor === C)    // true
