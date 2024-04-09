document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {

    e.preventDefault()
    const taskValue = document.getElementById('new-task-description').value;
    createNewTask(taskValue)
  
  }) 
})

function createNewTask(newTask) {
    
    let p = document.createElement('p')
    p.textContent = newTask
    console.log(p)
    document.querySelector('#tasks').appendChild(p)

}


