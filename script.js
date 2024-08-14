let tasks = [];

const addtask = () => {
    const taskinput = document.getElementById('taskinput');

    if (taskinput) {
        const text = taskinput.value.trim();
        if (text) {
            tasks.push({ text: text, completed: false });
            updattasklist();
            updatstate(); 
        }
        taskinput.value = ''; 
    }
};

const updattasklist = () => {
    const tasklist = document.querySelector('.tasklist');
    tasklist.innerHTML = ''; // Clear the task list before rendering

    tasks.forEach((task, index) => {
        const listitem = document.createElement('li');

        listitem.innerHTML = `
            <div class="taskitem">
                <div class="task ${task.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} />
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <i class="fa-regular fa-pen-to-square" onclick="editetask(${index})"></i>
                    <i class="fa-solid fa-trash" onclick="deletetask(${index})"></i>
                </div>
            </div>
        `;

        listitem.querySelector('.checkbox').addEventListener('change', () => ToggleTestComplete(index));
        tasklist.appendChild(listitem);
    });
};


document.getElementById('newtask').addEventListener('click', function(e) {
    e.preventDefault();
    addtask();
});

const ToggleTestComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updattasklist();
    updatstate();
};

const editetask = (index) => {
    const newTaskText = prompt("Edit your task:", tasks[index].text);
    if (newTaskText) {
        tasks[index].text = newTaskText.trim();
        updattasklist();
        updatstate();
    }
};

const deletetask = (index) => {
    tasks.splice(index, 1);
    updattasklist();
    updatstate();
};

const updatstate = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    const progressbar = document.getElementById('progress');
    progressbar.style.width = `${progress}%`;

    const numberElement = document.getElementById('number');
    numberElement.innerText = `${completedTasks}/${totalTasks}`;
};
