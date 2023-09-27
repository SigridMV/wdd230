// Variables declaration
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Declare an array named chaptersArray and assign it the results of a defined function named getChapterList.
let chaptersArray = getChapterList() || [];

//Modify the button click event listener
//Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
button.addEventListener("click", () => {
  // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.
  if (input.value.trim() !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
    
    }
});

// Create the displayList function
function displayList(item) {
  //create a li element
  let li = document.createElement("li");
  //create a delete button
  let deleteButton = document.createElement("button");

  li.textContent = item;

  //populate the button textContent with a ❌
  deleteButton.textContent = "❌";
  deleteButton.classList.add('delete');
  //append the li element with the delete button
  li.appendChild(deleteButton);
  //append the li element to the unordered list in your HTML
  list.append(li);
  //add an event listener to the delete button that removes the li element when clicked
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(item);

    input.focus();
  });
}

// Define the setChapterList function
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Define the getChapterList function to get the localStorage item.
function getChapterList() {
  let data = localStorage.getItem('myFavBOMList');
  return data ? JSON.parse(data) : [];
}

// Define the deleteChapter function
function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

//Populate the displayed list of chapters
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});






