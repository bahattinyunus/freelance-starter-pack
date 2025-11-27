import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Orta');

  useEffect(() => {
    // LocalStorage'dan görevleri çek
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      // Varsayılan veriler
      setTasks([
        { id: 1, title: 'React Öğren', priority: 'Yüksek' },
        { id: 2, title: 'Portfolyo Hazırla', priority: 'Orta' }
      ]);
    }
  }, []);

  useEffect(() => {
    // Görevler değiştiğinde LocalStorage'a kaydet
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask) return;
    const task = { id: Date.now(), title: newTask, priority };
    setTasks([...tasks, task]);
    setNewTask('');
    // axios.post('http://localhost:5000/api/tasks', task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    // axios.delete(`http://localhost:5000/api/tasks/${id}`);
  };

  const getPriorityColor = (p) => {
    if (p === 'Yüksek') return 'red';
    if (p === 'Orta') return 'orange';
    return 'green';
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Görev Yöneticisi</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Yeni görev ekle..."
          style={{ flex: 1, padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
        >
          <option value="Düşük">Düşük</option>
          <option value="Orta">Orta</option>
          <option value="Yüksek">Yüksek</option>
        </select>
        <button
          onClick={addTask}
          style={{ padding: '0.8rem 1.5rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Ekle
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{
            background: '#fff',
            border: '1px solid #eee',
            padding: '1rem',
            marginBottom: '0.5rem',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: getPriorityColor(task.priority),
                marginRight: '10px'
              }}></span>
              {task.title}
              <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '10px' }}>({task.priority})</span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
