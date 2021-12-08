let price = document.getElementById("price")
let userinput = document.getElementById("uc")
let button = document.getElementById("btn")
let answer = document.getElementById("result")

const getValue = () => {
    let fetchRes = fetch(`https://api.fastforex.io/fetch-one?from=${userinput.value}&to=INR&api_key=740ef6d770-a84c7d76cf-r3sn6a`);
    fetchRes.then(res =>
        res.json()).then(d => {
            let result = d.result.INR * price.value
            console.log(result)
            answer.innerHTML = `Answer : ${result}`
        })
}

button.addEventListener("click", getValue)

// API for get requests
// let fetchRes = fetch("https://api.fastforex.io/fetch-one?from=USD&to=EUR&api_key=740ef6d770-a84c7d76cf-r3sn6a");
// // fetchRes is the promise to resolve
// // it by using.then() method
// fetchRes.then(res =>
//         res.json()).then(d => {
//             console.log(d.result)
//         })