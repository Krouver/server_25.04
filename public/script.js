const ul = document.querySelector('ul')

getUsers().then(showUsers)

function getUsers() {
  const url = '/api/users'
  fetch(url)
}

function showUsers() {
  ul.innerHTML = users.map((user) => `<li>${user.name}</li>`).join('')
}

