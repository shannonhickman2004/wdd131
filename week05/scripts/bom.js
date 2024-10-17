//declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('chapterList');
const li = document.createElement('li');//this is a li element that will hold each entries chapter title and an associated delete button
const deleteButton = document.createElement('button');//create a delete button
li.textContent = input.value;
deleteButton.textContent - 'X';//populate the button textContent with a X
li.append(deleteButton);//append the li element variable with the delete button
list.append(li);
button.addEventListener('click', function() {});//code to execute when the button is clicked
if (input.value.trim() !== '') { ... }
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});
input.value = '';
input.focus();



