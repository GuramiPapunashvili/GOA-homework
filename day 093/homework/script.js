document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('task-input');
    var addTaskButton = document.getElementById('add-task');
    var taskList = document.getElementById('task-list');
    var clearTasksButton = document.getElementById('clear-tasks');

    loadTasks();

    function loadTasks() {
        var tasks = localStorage.getItem('tasks');
        if (tasks) {
            var taskArray = tasks.split(',');
            for (var i = 0; i < taskArray.length; i++) {
                var taskData = taskArray[i].split('|');
                createTaskElement(taskData[0], taskData[1] === 'true');
            }
        }
    }

    function createTaskElement(text, completed) {
        var li = document.createElement('li');
        li.innerHTML = '<input type="checkbox"' + (completed ? ' checked' : '') + '>' + 
                       '<span class="' + (completed ? 'completed' : '') + '">' + text + '</span>' + 
                       '<button class="delete-task">Delete</button>';
        taskList.appendChild(li);

        var checkbox = li.getElementsByTagName('input')[0];
        checkbox.addEventListener('change', function() {
            li.getElementsByTagName('span')[0].classList.toggle('completed');
            saveTasks();
        });

        var deleteButton = li.getElementsByClassName('delete-task')[0];
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
            saveTasks();
        });
    }

    function saveTasks() {
        var tasks = [];
        var items = taskList.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
            var text = items[i].getElementsByTagName('span')[0].innerText;
            var completed = items[i].getElementsByTagName('input')[0].checked;
            tasks.push(text + '|' + completed);
        }
        localStorage.setItem('tasks', tasks.join(','));
    }

    addTaskButton.addEventListener('click', function() {
        var taskText = taskInput.value.trim();
        if (taskText) {
            createTaskElement(taskText, false);
            taskInput.value = '';
            saveTasks();
        }
    });

    clearTasksButton.addEventListener('click', function() {
        taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    });
});
