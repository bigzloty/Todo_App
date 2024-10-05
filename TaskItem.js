import React from 'react';

function TaskItem({ task, tasks, setTasks }) {
  const toggleComplete = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={toggleComplete}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;