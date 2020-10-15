import { fierst, last } from "lodash";
import {drawData, sum}  from "./utils";  //дефолтные значения импортируются без скобок 

const apiUrl = 'http://localhost:3000';

const addBtn = document.getElementById('add'),
    deleteBtn = document.getElementById('delete'),
    wrapper = document.getElementById('data');

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => drawData(data, wrapper));

wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        fetch(`${apiUrl}/delete?id=${e.target.dataset.userId}`)
        .then((response) => response.json())
        .then((data) => drawData(data, wrapper));
    }
});

addBtn.addEventListener('click', () => {
    fetch(`${apiUrl}/add`)
    .then((response) => response.json())
    .then((data) => drawData(data, wrapper));
});

deleteBtn.addEventListener('click', () => {
    fetch(`${apiUrl}/delete`)
    .then((response) => response.json())
    .then((data) => drawData(data, wrapper));
});

// console.log(last([1,2,3]));

const later = (value, cb, time = 1000) => setTimeout(() => cb(value), time);
const promisifyLater = (value, time = 1000) => 
    new Promise((res) => later(value, res, time));

    // const tab

const firstTask = (value) => console.log(`First: ${value}`);
const secondTask = (value) => console.log(`Second: ${value}`);

const half = (value) => value/2;
const sqrt = (value) => Math.sqrt(value);

const pr = promisifyLater(['','','',]); 
const halfPr = pr
            .then(curryRight(map)((element) => element + ''))
            .then(curryRight(map)(() => ''))
            .then(console.log);

const funnier = halfPr;

funnier
.then(curryMap(() => '=('))
.then(tab(console.log))
.then(curryMap(() => '='))
.then(tab(console.log));

//  console.log(pr);

// const halfPr = pr
//             .then(curryRight(Math.pow)(2))
//             .then(console.log);

// halfPr.then(sqrt).then(firstTask);

// halfPr.then(secondTask); 

// later(1000,(v) => {
//     const preparedValue = sqrt(half(v));
//     firstTask(preparedValue);
//     secondTask(preparedValue);
// });

// const pr = Promise.resolve(200);
// const halfPr = pr.then(half);

// // console.log(pr);

// pr.then(sqrt).then(firstTask);
// pr.then(secondTask); 

// // => {
//     console.log(value);
//     return 4;
// })
//     .then((value) => {
//         console.log(value);
//     })
//     .then((value) => {
//         console.log(value);
//     });

// const pr = new Promise ((res, rej) => {

//     setTimeout(() => {
//         res(200);
//     }, 1000);
// });



