function onAddItemClick() {
  console.log("poga noklikscinata");
  var newItem = getNewItem();

  if (newItem === "") {
    return;
  }
  addItem(newItem);
}
// dabut vertibu ko cilveks ievada ievades lauka:

function getNewItem() {
  var newItemInputEl = document.getElementById("new-item-input");
  // console.log(newItemInputEl.value);
  var newItem = newItemInputEl.value;

  newItemInputEl.value = "";

  return newItem;
}

function addItem(newItem) {
  //atrodam saraksta konteineri
  var todoListEl = document.getElementById("todo-list");

  //izveidojam jaunu saraksta ierakstu

  todoListEl.innerHTML =
    todoListEl.innerHTML +
    '<li class="list-group-item">' +
    newItem +
    '<button onclick = "removeItem(this)" type="button" class="btn btn-outline-danger">Remove</button></li>';
}
function removeItem(clickedButton) {
  console.log(clickedButton);
  //button      ->li      ->ul                      button     ->li
  clickedButton.parentNode.parentNode.removeChild(clickedButton.parentNode);
}

// dabut vertibu ko cilveks ievada ievades lauka:

function getNewItem() {
  var newItemInputE2 = document.getElementById("new-textarea-input");
  // console.log(newItemInputE2.value);
  var newItem = newItemInputE2.value;

  newItemInputE2.value = "";

  return newItem;
}
function addItem(newItem) {
  //atrodam saraksta konteineri
  var todoListE2 = document.getElementById("Example");

  //izveidojam jaunu saraksta ierakstu

  todoListE2.innerHTML =
    todoListE2.innerHTML +
    '<li class="list-group-item">' +
    newItem +
    '<button onclick = "removeItem(this)" type="button" class="btn btn-outline-danger">Remove</button></li>';
}
function removeItem(clickedButton) {
  console.log(clickedButton);
  //button      ->li      ->ul                      button     ->li
  clickedButton.parentNode.parentNode.removeChild(clickedButton.parentNode);
}
function getNewItem() {
  var newItemInputE2 = document.getElementById("new-textarea-input");
  // console.log(newItemInputE2.value);
  var newItem = newItemInputE2.value;

  newItemInputE2.value = "";

  return newItem;
}
