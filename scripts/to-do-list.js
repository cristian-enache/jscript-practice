const todoList = [];

rendorTodolist();

function rendorTodolist(){

    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;

        const html =`
        <div>${name}</div>
        <div>${dueDate}</div>
            <button onclick ="todoList.splice(${i}, 1); rendorTodolist(); "class="btn-delete" >Delete</button>
        `;
        todoListHTML += html;
    }
    //console.log(todoListHTML);
    document.querySelector('.js-to-do-List').innerHTML = todoListHTML;
    }

function addTdl(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    const dateInputElemnt = document.querySelector('.js-dueDate-input');
    const dueDate = dateInputElemnt.value;
    
    todoList.push( {name, dueDate} );

    //console.log(name);

    inputElement.value = "";

    //document.querySelector('.show').innerHTML = todoList;

    rendorTodolist();
}