function toDoModal () {
    const newToDoContainer = document.createElement('div')
    const heading = document.createElement('h2');
    heading.textContent = 'Add New To do'
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
    prioritySelection.appendChild(option1)
    prioritySelection.appendChild(option2)
    prioritySelection.appendChild(option3)
    priorityContainer.appendChild(priorityLabel)
    priorityContainer.appendChild(document.createElement('p'))
    priorityContainer.appendChild(prioritySelection)
    newToDoContainer.appendChild(heading)
    newToDoContainer.appendChild(toDoLabel)
    newToDoContainer.appendChild(document.createElement('p'))
    newToDoContainer.appendChild(toDoInput)
    newToDoContainer.appendChild(document.createElement('p'))
    newToDoContainer.appendChild(priorityContainer)
    

    return newToDoContainer;


}

export { toDoModal }