document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  if (username === 'admin' && password === 'password123') {
    messageDiv.textContent = 'Login successful!';
    messageDiv.style.color = 'green';
  } else {
    messageDiv.textContent = 'Invalid username or password.';
    messageDiv.style.color = 'red';
  }
});
