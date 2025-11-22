import './style.css';
import { projectModal } from './project-modal.js';
import  { toDoModal } from './todo-modal.js'

const modalWindow = document.querySelector('.modal__window')
const addProjectBtn = document.querySelector('.add-project-btn')
const addToDoBtn = document.querySelector('.add-todo-btn')

addProjectBtn.addEventListener('click', function () {
    const todoContainer = document.querySelector('.todo-container')
    const projectContainer = document.querySelector('.project-container')
    if (todoContainer) modalWindow.removeChild(todoContainer)
    if (!projectContainer) modalWindow.appendChild(projectModal())
})

addToDoBtn.addEventListener('click', function() {
    const projectContainer = document.querySelector('.project-container')
    const todoContainer = document.querySelector('.todo-container')
    if (projectContainer) modalWindow.removeChild(projectContainer)
    if (!todoContainer) modalWindow.appendChild(toDoModal())
})
