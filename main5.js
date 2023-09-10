// 비동기

// 개요
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
.then(res => res.json())
.then(res => console.log(res))

console.log(1)  // 여기가 먼저 실행됨
console.log(2)
console.log(3)

// 콜백과 콜백 지옥
const callbackA = (callback) => {
    setTimeout(() => {
        console.log(1)
        callback()
    }, 1000)
}

const callbackB = () => console.log(2)

callbackA(() => {
    callbackB()
})

// Promise
const promiseA = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('promiseA')
            resolve()
        }, 1000)
    })
}

const promiseB = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('promiseB')
            resolve()
        }, 1000)
    })
}

const promiseC = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('promiseC')
            resolve()
        }, 1000)
    })
}

const promiseD = () => console.log('promiseD')

// promiseA()
//     .then(() => {   // promiseA 의 resolve로 들어감
//          promiseB()
//             .then(() => {   // promiseB 의 resolve로 들어감
//                 promiseC()
//             })
//         })
// 똑같은 callback 지옥...

promiseA()
    .then(() => { return promiseB() })  // promise 반환 == () => promiseB() == promiseB
    .then(() => { return promiseC() })  // promise 반환 == () => promiseC() == promiseC
    .then(() => { promiseD() })         // == promiseD

promiseA()
    .then(promiseB)
    .then(promiseC)
    .then(promiseD)
    .then(() => console.log('done'))

const getMovies = movieName => {
    return new Promise(resolve => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            resolve()
        })
    })
}

getMovies('frozen')
    .then(() => {
        console.log('겨울왕국!')
        return getMovies('avengers')
    })
    .then(() => {
        console.log('어벤져스!')
        return getMovies('avatar')
    })
    .then(() => {
        console.log('아바타!')
    })

// Async / Await
// await promiseA()    
// Promise 를 반환하는 함수에만 await를 붙일 수 있다. + async 로 감싸진 함수에서만 호출 가능하다.

// promiseA().then(() => promiseB())
const wrap = async () => {
    await promiseA()
    promiseB()
}

wrap()

const movieWrap = async () => {
    await getMovies('frozen')
    console.log('겨울왕국!')
    await getMovies('avengers')
    console.log('어벤져스!')
    await getMovies('avatar')
    console.log('아바타!')
}

movieWrap()

// Resolve, Reject, 에러 핸들링
const delayAdd = (index, callback, errorCallback) => {
    setTimeout(() => {
        if (index > 10) {
            errorCallback(`${index}는 10보다 클 수 없습니다.`)
            return
        }

        console.log('delayAdd >> ', index)
        callback(index + 1)
    }, 1000)
}

delayAdd(
    13,
    res => console.log('delayAdd >> ', res),
    err => console.error('delayAdd >> ', err)
)

const delayAddResolve = (index) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index > 10) {
                reject(`${index}는 10보다 클 수 없습니다.`)
                return
            }
    
            console.log('delayAddResolve >> ', index)
            resolve(index + 1)
        }, 1000)
    })
}

delayAddResolve(4)
    .then(res => console.log('delayAddResolve >> ', res))       // resolve 로 들어감
    .catch(err => console.error('delayAddResolve >> ', err))    // reject 로 들어감
    .finally(() => console.log('done1!'))
// 둘중에 하나만 실행된다.

const resolveWrap = async () => {
    try {   // resolve 로 들어감
        const res = await delayAddResolve(12)
        console.log('resolveWrap >> ', res)
    } catch (err) { // reject 로 들어감
        console.error('resolveWrap Error >> ', err)
    } finally {
        console.log('done2!')
    }
}

resolveWrap()
// Promise > 나를 호출하는 함수를 위해 미래에 이런 값을 내보내주겠다. 라고 선언하는 것.
const getMoviesResolve = movieName => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(json => {
            if (json.Response === 'False') {
                reject(json.Error)
            }
            resolve(json)
        })
        .catch(error => {
            reject(error)
        })
    })
}

let loading = true

getMoviesResolve('avengers')
    .then(movies => console.log('영화 목록 : ', movies))
    .catch(error => console.log('에러 발생 : ', error))
    .finally(() => loading = false)

const getMoviesResolveWrap = async () => {
    try {
        const movies = await getMoviesResolve('avengers')
        console.log('getMoviesResolveWrap 영화 목록 : ', movies)
    } catch (err) {
        console.log('getMoviesResolveWrap 에러 발생 : ', err)
    } finally {
        loading = false
    }
}

getMoviesResolveWrap()

// 반복문에서 비동기 처리
const getMoviesLoop = movieName => {
    return new Promise(resolve => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(res => resolve(res))
    })
}

const movieTitles = ['frozen', 'avengers', 'avatar']

// forEach 안에서는 비동기임
movieTitles.forEach(async title => {
    const movies = await getMoviesLoop(title)
    console.log('getMoviesLoop forEach >> ', title, movies)
})

// for 문 자체를 async로 감싸 실행 순서 보장
const loopWrap = async () => {
    for (const title of movieTitles) {
        const movies = await getMoviesLoop(title)
        console.log('getMoviesLoop For >> ', title, movies)
    }
}

loopWrap()

// fetch(주소, 옵션) - 네트워크를 통해 리소스의 request 및 response를 처리하며, Promise를 반환
fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`)
    .then(res => res.json())  // res.json() 도 Promise 반환
    .then(json => console.log('fetch>> ', json))

const fetchWrap = async () => {
    const fetchRes = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`)
    const json = await fetchRes.json()
    console.log('fetchWrap >> ', json)
}

fetchWrap()

fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`, {
    method : 'GET', // default - GET
    // headers: {
    //     'Content-Type' : 'application/json'
    // },
    // body: JSON({
    //    name : 'Jay',
    //    age : 30
    // })
})
.then(res => res.json())
.then(json => console.log('fetch option >> ', json))

