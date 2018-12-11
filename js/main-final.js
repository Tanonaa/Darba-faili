function addItem(name) {
  $(
    '<li class="list-group-item d-flex justify-content-between align-items-center"><span class="name">' +
      name +
      '</span><span class="actions"><button class="done-btn">Done</button><button class="delete-btn" data-toggle="modal" data-target="#exampleModal">Delete</button></span></li>'
  ).appendTo("#mustHaveList");
}

function deleteItem() {
  console.log("delete item click");
  $(this)
    .parents("li")
    .remove();
}

$(document).ready(function() {
  $("#add-form").submit(function(event) {
    event.preventDefault();

    var newItemInput = $(".input-group .form-control");
    var newItem = newItemInput.val();

    if (newItem !== "") {
      newItemInput.val("");
      addItem(newItem);
    }

    addItem(newItem);
  });
  $(".modal .btn-primary").click(deleteItem);
  //$("#mustHaveList").on("click", ".actions .delete-btn", deleteItem);
});
