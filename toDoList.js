// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  if (e.key === 'Enter' || e.button === 0) {
    e.preventDefault();
    // get a reference to the input element
    const input = document.getElementsByTagName('input')[0];
    const text = input.value; // use this text to create a new <li>

    // Finish function here
    const ulElem = document.getElementsByClassName("today-list")[0];
    const liElem = document.createElement(`li`);
    liElem.innerHTML = `<span>${text}</span><a class="delete">Delete</a>`;
    
    // append the new item to the to-do list
    ulElem.appendChild(liElem)

    // Clear the text from the input element
    const inputElem = document.getElementsByTagName("input")[0];
    inputElem.value = "";
  }
};

// addButton event handler used to add items upon left mouse clicking the add button
const addButton = document.getElementsByClassName("add-item")[0];
addButton.addEventListener('click', (e) => {addListItem(e)});

// input element event hander use to add item on "Enter" key press
const inputElem = document.getElementsByTagName("input")[0];
inputElem.addEventListener('keydown', (e) => {addListItem(e)});

// referece to the ul element
const ulElem = document.getElementsByClassName("today-list")[0];

// add event handler to to-do list to set items as done or remove items
ulElem.addEventListener('click', (e) => {
  if(e.target.className === 'delete') {
    deleteItem(e);
  } else {   
    setListItemToDone(e)
  }
});

// set items as done handler
const setListItemToDone = (e) => {
  if (e.target.parentNode.className == "done") {
    e.target.parentNode.classList.remove("done")
  } else {
    e.target.parentNode.classList.add("done");
  }
}

// delete to-do item hander
const deleteItem = (e) => {
  const liElem = e.target.parentNode;
  ulElem.removeChild(liElem);
}