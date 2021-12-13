import React from 'react';
import { Task } from '../'
import '../styles/taskList.css'

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskList: React.VFC<Props> = ({ tasks, setTasks }) => {
  //Taskの状態を切り替える
  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newTask = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTask);
  };
  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={`todo-${index}`} className='task-items'>
          {task.isDone ? <s>{task.label}</s> : task.label}
          <input 
            className='task-input'
            onChange={(e) => handleCheckBox(e, index)}
            type="checkbox"
            checked={task.isDone}
          />
        </li>
      ))
      }
    </ul>
  );
};
