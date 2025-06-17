// script.js
document.getElementById('add-task').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Right-click to delete
  li.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    li.remove();
  });

  document.getElementById('task-list').appendChild(li);

  taskInput.value = '';
});
