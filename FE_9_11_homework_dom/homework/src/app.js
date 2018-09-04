const maxItemPerList = 10;
let taskCounter = 0;

const addButton = document.querySelector('.add_new_action_btn');
const taskList = document.querySelector('.task-list');
const newActionInput = document.querySelector('.new_action');

newActionInput.onkeyup = function event() {
    let newActionText = newActionInput.value.trim();
    
    newActionText ? addButton.disabled = false : addButton.disabled = true;
    
    if (event.key === 'Enter' && newActionText) {
        addTask(newActionText);
    }
}

newActionInput.onchange = function () {
    let newActionText = newActionInput.value.trim();

    newActionText ? addButton.disabled = false : addButton.disabled = true;
}

addButton.onclick = function() {
    addTask(newActionInput.value.trim());
} 

function addTask(taskText) { 
    
    let taskListItem = document.createElement('li');
    let chekBox = document.createElement('i');
    let taskSpan = document.createElement('p');
    let deleteBox = document.createElement('i');
    
    if (taskCounter < maxItemPerList) {
        taskCounter++;
        taskListItem.setAttribute('class', 'list-item');
        taskListItem.setAttribute('draggable', true);
        chekBox.setAttribute('class', 'material-icons');
        chekBox.appendChild(document.createTextNode('check_box_outline_blank'));
        taskSpan.appendChild(document.createTextNode(taskText));
        deleteBox.setAttribute('class', 'material-icons');
        deleteBox.appendChild(document.createTextNode('delete'));
        
        taskList.appendChild(taskListItem);
        taskListItem.appendChild(chekBox);
        taskListItem.appendChild(taskSpan);
        taskListItem.appendChild(deleteBox);
    
        newActionInput.value = '';
        addButton.disabled = true;  
        
        
        
    } else {
        let notification = document.createElement('p');
        notification.setAttribute('class', 'notification');
        notification.appendChild(document.createTextNode('Maximum item per list are created'));
        let listHeader = document.getElementById('list-header');
        listHeader.appendChild(notification);
        newActionInput.disabled = true;
        addButton.disabled = true;   
    }
    
    deleteBox.onclick = function() {
        taskListItem.remove();
        taskCounter--;
        newActionInput.disabled = false;
        addButton.disabled = false;   
    }
    
    chekBox.onclick = function() {
        chekBox.textContent = 'check_box';        
    }
}