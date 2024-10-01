let taskFormEl = document.getElementById('task-form');
let taskInputEl = document.getElementById('task-el');


let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];


taskFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    createTask();
    displayTasks();
});

function createTask() {
    let task = taskInputEl.value.trim(); 
  
        let taskObj = { taskVal: task, isCompleted: false };
        taskList.unshift(taskObj);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        console.log(taskList);
        taskInputEl.value = ''; 
    
}

// Display
function displayTasks() {
    if(taskList.length!=0){
        let eachtask="";
        taskList.forEach((task,index)=>
        {
            eachtask+=
            `<li class="list-group-item list-group-item-dark mb-2">
            <span>${task.taskVal}</span>
            <button class="float-end ms-2 abc" )>
                <i class="bi bi-trash" onclick="DeleteTask(${index})"></i>
            </button>
            <button class="float-end ms-2 abc")>
                <i class="bi bi-pen" onclick="UpdateTask(${index})"></i>
            </button>
        `;
        });
        document.getElementById('task-list').innerHTML=eachtask;
}
}
displayTasks();

//Delete functionality

function DeleteTask(index)
{
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
}


//update Functinality
function UpdateTask(index)
{
    taskInputEl.value=taskList[index].taskVal;
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
}