document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById('create-task-form')
  let ul=document.getElementById('tasks')
  taskForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const taskInput=document.querySelector("#new-task-description");
    const toDo=taskInput.value
    if(toDo){
      const newList=document.createElement('li');
    const btn=document.createElement('button')
    btn.textContent=  'x'
    btn.addEventListener('click',deleteButton)
      newList.innerText=`${toDo} `;
      newList.append(btn);
      
      ul.appendChild(newList)
      input.value='';
    }


   
})
})
function deleteButton(e){
  e.target.parentNode.remove()
}
