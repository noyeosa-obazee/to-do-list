function toDoModal () {
    const newToDoContainer = document.createElement('div')
    newToDoContainer.classList.add('todo-container')
    const heading = document.createElement('h2');
    heading.textContent = 'Add New To do'
    const toDoForm = document.createElement('form')
    toDoForm.classList.add('todo-form')
    const toDoLabel = document.createElement('label');
    toDoLabel.setAttribute('for', 'to-do-input')
    toDoLabel.textContent = 'Enter task:'
    const toDoInput = document.createElement('textarea')
    toDoInput.setAttribute('placeholder', 'Enter task...')
    toDoInput.id = 'to-do-input';
    const priorityContainer = document.createElement('div')
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority-select')
    priorityLabel.textContent = 'Choose task priority:'
    const prioritySelection = document.createElement('select')
    prioritySelection.id = 'priority-select'
    const option1 = document.createElement('option')
    option1.textContent = 'High'
    option1.value = 'high'
    const option2 = document.createElement('option')
    option2.textContent = 'Medium'
    option2.value = 'medium'
    option2.selected = true;
    const option3 = document.createElement('option')
    option3.textContent = 'Low'
    option3.value = 'low'
    const addToDoButton = document.createElement('button')
    addToDoButton.type ='submit'
    addToDoButton.textContent = 'Add Task'
    addToDoButton.classList.add('add-todo-btn')
    addToDoButton.onclick = (e) => { e.preventDefault() }
    newToDoContainer.appendChild(heading)
    prioritySelection.appendChild(option1)
    prioritySelection.appendChild(option2)
    prioritySelection.appendChild(option3)
    priorityContainer.appendChild(priorityLabel)
    priorityContainer.appendChild(document.createElement('p'))
    priorityContainer.appendChild(prioritySelection)
    toDoForm.appendChild(toDoLabel)
    toDoForm.appendChild(document.createElement('p'))
    toDoForm.appendChild(toDoInput)
    toDoForm.appendChild(document.createElement('p'))
    toDoForm.appendChild(priorityContainer)
    toDoForm.appendChild(document.createElement('p'))
    toDoForm.appendChild(addToDoButton)
    newToDoContainer.appendChild(toDoForm)
    

    return newToDoContainer;


}

export { toDoModal }