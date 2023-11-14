// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = body.getElementsByTagName('main')[0];
console.log(main.outerHTML);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const body_2 = ul.parentElement.parentElement
console.log(body_2.outerHTML);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
third_liElem = p.previousElementSibling.getElementsByTagName('li')[2]
console.log(third_liElem.outerHTML);