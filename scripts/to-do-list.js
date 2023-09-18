const todoList = [];

function addTdl(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    
    todoList.push(name);

    inputElement.value = "";

    document.querySelector('.show').innerHTML = todoList;
}


