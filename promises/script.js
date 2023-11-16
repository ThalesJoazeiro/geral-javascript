// Criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = "John"

    if(nome === "John"){
        resolve('Usuário John encontrado!')
    }
    else{
        reject('Usuário John não encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data)
})


// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "John"

    if(nome === "John"){
        resolve('Usuário John encontrado!')
    }
    else{
        reject('Usuário John não encontrado!')
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})


// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = "John"

    if(nome === "John"){
        resolve('Usuário John encontrado!')
    }
    else{
        reject('Usuário John não encontrado!')
    }
})

myPromise3.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log('Erro: ' + err)
})


// Resolver várias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok!')
    }, 2000)
    
})

const p2 = new Promise((resolve, reject) => {
    resolve('P1 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P1 ok!')
})

const resolveAll = Promise.all(p1, p2, p3)
.then((data) => {
    console.log(data);
})


// Várias promises com race
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok!')
    }, 2000)
    
})

const p5 = new Promise((resolve, reject) => {
    resolve('P1 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P1 ok!')
})

const resolveAllRace = Promise.race(p4, p5, p6)
.then((data) => {
    console.log(data);
})


//Fetch request na API do GitHub

const userName = 'ThalesJoazeiro'

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Erro: ${err}`)
})