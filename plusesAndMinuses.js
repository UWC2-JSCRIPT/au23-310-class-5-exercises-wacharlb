// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let counter = 0;
const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
    
function incrementDecrement(e) {
    e.preventDefault();
    const id = e.target.id;
    
    if (id === 'plus') {
        counter++;
    } else if (id === 'minus') {
      counter--;
    }

    //console.log(this);
    document.getElementById("count").innerHTML = counter;
}

plusEl.addEventListener('click', (e) => {incrementDecrement(e)});
minusEl.addEventListener('click', (e) => {incrementDecrement(e)});