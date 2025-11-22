function projectModal () {
    const newProjectContainer = document.createElement('div')
    newProjectContainer.classList.add('project-container')
    const projectForm = document.createElement('form')
    projectForm.classList.add('project-form')
    const heading = document.createElement('h2');
    heading.textContent = 'Add New Project'
    const projectTitleLabel = document.createElement('label');
    projectTitleLabel.setAttribute('for', 'project-title')
    projectTitleLabel.textContent = 'Enter project title:'
    const projectTitleInput = document.createElement('input')
    projectTitleInput.setAttribute('placeholder', 'Enter project title...')
    projectTitleInput.id = 'project-title';
    const projectDescriptionLabel = document.createElement('label')
    projectDescriptionLabel.textContent = 'Enter project description:'
    projectDescriptionLabel.setAttribute('for', 'project-description')
    const projectDescriptionInput = document.createElement('textarea')
    projectDescriptionInput.setAttribute('placeholder', 'Enter project description...')
    projectDescriptionInput.id = 'project-description'
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'When is this project due?'
    dueDateLabel.setAttribute('for', 'due-date')
    const dueDatePicker = document.createElement('input')
    dueDatePicker.type = 'date'
    dueDatePicker.id = 'due-date'
    const priorityContainer = document.createElement('div')
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority-select')
    priorityLabel.textContent = 'Choose project priority:'
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
    const addProjectButton = document.createElement('button')
    addProjectButton.textContent = 'Add Project'
    addProjectButton.classList.add('add-project-btn')
    addProjectButton.type = 'submit'
    addProjectButton.onclick = (e) => { e.preventDefault() }
   newProjectContainer.appendChild(heading)
   prioritySelection.appendChild(option1)
    prioritySelection.appendChild(option2)
    prioritySelection.appendChild(option3)
    priorityContainer.appendChild(priorityLabel)
    priorityContainer.appendChild(document.createElement('p'))
    priorityContainer.appendChild(prioritySelection)
   projectForm.appendChild(projectTitleLabel)
   projectForm.appendChild(document.createElement('p'))
   projectForm.appendChild(projectTitleInput)
    projectForm.appendChild(document.createElement('p'))
   projectForm.appendChild(projectDescriptionLabel)
   projectForm.appendChild(document.createElement('p'))
   projectForm.appendChild(projectDescriptionInput)
   projectForm.appendChild(document.createElement('p'))
   projectForm.appendChild(dueDateLabel)
   projectForm.appendChild(document.createElement('p'))
   projectForm.appendChild(dueDatePicker)
   projectForm.appendChild(document.createElement('p'))
   projectForm.appendChild(priorityContainer)
   projectForm.appendChild(document.createElement('p'))
   projectForm.appendChild(addProjectButton)
   newProjectContainer.appendChild(projectForm);

   return newProjectContainer

}

export { projectModal };