function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var myTodo = { title: 'Trash', text: 'Take out trash' };
showTodo(myTodo);
function showTodo2(todo) {
    console.log(todo.title, todo.text);
}
showTodo2(myTodo);
