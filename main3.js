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