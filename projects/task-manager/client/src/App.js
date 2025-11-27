import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Fetch tasks from backend
    // axios.get('http://localhost:5000/api/tasks').then(res => setTasks(res.data));
    // Mock data for now
    setTasks([{ id: 1, title: 'Learn React' }, { id: 2, title: 'Build a project' }]);
  }, []);

  const addTask = () => {
    if (!newTask) return;
    const task = { id: Date.now(), title: newTask };
    setTasks([...tasks, task]);
    setNewTask('');
    // axios.post('http://localhost:5000/api/tasks', task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    // axios.delete(`http://localhost:5000/api/tasks/${id}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Task Manager</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={addTask} style={{ padding: '0.5rem 1rem' }}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '0.5rem' }}>
            {task.title} <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '1rem', color: 'red' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
