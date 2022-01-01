/* This exercise is done using promise */

const BASE_URL = "http://numbersapi.com"
let favorite_number = 42;
// function number_fact(){
//1
// let firstPromise = axios.get("http://numbersapi.com/42?json");
let firstPromise = axios.get(`${BASE_URL}/${favorite_number}?json`);
// resolved holds the data that the .then() function returns //.data.text comes from the API's data response
firstPromise.then(resolved => console.log(resolved));
// OR
// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//     console.log(data);
//   });

// 2.
// for multiple numbers, and also range of some numbers
// http://numbersapi.com/1..3,10 
let favorite_nums = [7, 11, 22];
$.getJSON(`${BASE_URL}/${favorite_nums}?json`).then(res => {
console.log(res);
});

// 3.
Promise.all(
    Array.from({ length: 4 }, () => {
    return $.getJSON(`${BASE_URL}/${favorite_number}?json`);
    })
).then(facts => {
    facts.forEach(res => $("body").append(`<p>${res.text}</p>`));
});
// }
/**/