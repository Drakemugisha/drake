
const todoForm = document.getElementById('todoForm');
const newTaskInput = document.getElementById('newTask');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', (event)=> {
  event.preventDefault(); 

  const taskText = newTaskInput.value.trim(); 

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  li.appendChild(removeBtn);

  removeBtn.addEventListener('click',(event) => {
    event.stopPropagation();
    event.target.classList.toggle("cross");
  });

  todoList.appendChild(li);

  newTaskInput.value = '';
});
