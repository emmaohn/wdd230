const myInput = document.getElementById('favchap');
const myList = document.querySelector(".list");
// const myList = document.querySelectorAll("list")[0];
const myButton = document.querySelector("main div button");
myButton.addEventListener('click', () => {
    if (myInput.value == '') {
        return;
    };
    // create a delete button
    const newItem = document.createElement('li');
    // create a delete button
    const newButton = document.createElement('button');
    // populate the li elements textContent or innerHTML with the input
    newItem.textContent = myInput.value;
    // populate the button textContent with an ❌
    newButton.textContent = '❌';
    // append the li element with the delete button
    // use append by default
    newItem.append(newButton);
    // append the list element with the li element just created and appended with text and the delete button
    myList.append(newItem);
    // add an event listener to the delete button that removes the li element when clicked
    newButton.addEventListener('click', () => {
        newItem.remove();
    });
    // send the focus to the input element
    // moves the focus from the button back to the input box 
    //  moves the cursor back to the inbox (think of the little highlight)
    myInput.focus();
    // clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
    myInput.value = '';
});