import './style.css';

import  { toDoModal } from './todo-modal.js'

const modalWindow = document.querySelector('.modal__window')

modalWindow.appendChild(toDoModal());