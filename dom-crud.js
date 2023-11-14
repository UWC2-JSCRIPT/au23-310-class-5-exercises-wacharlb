// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const aElem = document.createElement('a');
aElem.innerHTML = "Buy Now!";
aElem.setAttribute('id', 'cta');
const mainElem = document.getElementsByTagName('main')[0]
mainElem.appendChild(aElem);

// Access (read) the data-color attribute of the <img>,
// log to the console

const imgElem = document.getElementsByTagName("img")[0];
const color = imgElem.getAttribute('data-color');
console.log(color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const third_liElem = document.querySelectorAll("li")[2];
third_liElem.setAttribute("class", "highlight");

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const pElem = mainElem.getElementsByTagName("p")[0];
mainElem.removeChild(pElem);