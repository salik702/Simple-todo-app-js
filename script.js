let title = document.getElementById('title');
let description = document.getElementById('desc');
let submit = document.getElementById('submit');
let deletebtn = document.getElementById('delete');
let todo = document.getElementById('todo');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  let titleV = title.value.trim();
  let descV = description.value.trim();

  localStorage.setItem('todo', JSON.stringify([titleV, descV]));

  todo.innerHTML = `
    <h1>${titleV}</h1>
    <p>${descV}</p>
  `;
});

deletebtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('todo');
  todo.innerHTML = '';
});
