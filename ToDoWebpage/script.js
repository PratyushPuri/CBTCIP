document.addEventListener('DOMContentLoaded', function() {
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(item => {
        const checkbox = item.querySelector('.form-check-input');
        const deleteBtn = item.querySelector('.delete-btn');

        checkbox.addEventListener('change', function() {
            item.classList.toggle('completed', this.checked);
        });

        deleteBtn.addEventListener('click', function() {
            item.remove();
        });
    });

    const addButton = document.querySelector('.btn-primary');
    const taskList = document.querySelector('.task-list');
    const taskInput = document.querySelector('.form-control');

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTaskItem = document.createElement('li');
            newTaskItem.classList.add('task-item');
            newTaskItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div>
                    <input type="checkbox" class="form-check-input">
                    <span class="delete-btn">Delete</span>
                </div>
            `;
            taskList.appendChild(newTaskItem);

            const checkbox = newTaskItem.querySelector('.form-check-input');
            const deleteBtn = newTaskItem.querySelector('.delete-btn');

            checkbox.addEventListener('change', function() {
                newTaskItem.classList.toggle('completed', this.checked);
            });

            deleteBtn.addEventListener('click', function() {
                newTaskItem.remove();
            });

            taskInput.value = '';
        }
    });
});