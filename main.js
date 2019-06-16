
var todos = [];
var input = document.getElementById("taskInput");

// listens for button click
function addTodo() {
    var todoItem = input.value;
    todos.push(todoItem);
    console.log(todos);
    addToList(todoItem);
    input.value = "";

}


function addToList(todoItem) {
    var li = document.createElement("LI");
    var text = li.innerHTML = todoItem;
    document.getElementById("todoList").appendChild(li);
}

