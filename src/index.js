import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from './components/AppProvider'




const TaskObject = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Bath", completed: false },
  { id: "todo-2", name: "Work", completed: false }
];
ReactDOM.render(  
<AppProvider>
<App tasks ={TaskObject} />
</AppProvider>
, document.getElementById('root'));


