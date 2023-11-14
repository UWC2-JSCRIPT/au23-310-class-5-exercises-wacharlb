// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const table = document.getElementsByTagName('table')[0];

let x = 0;
let y = 0

table.addEventListener('mousemove', (e) => {getPosition(e)});
table.addEventListener('click', (e) => {printCoordinates(e)} )

function printCoordinates(e) {
    e.target.innerHTML = `${x}, ${y}`
}

const getPosition = (e) => {
    x = e.clientX, y = e.clientY
}
