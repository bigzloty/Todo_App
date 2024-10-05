import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TaskList;