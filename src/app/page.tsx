"use client"
import { useState, useEffect } from 'react';
import TaskList from '@/app/components/TaskList/page';

const Home = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const removeTask = (taskToRemove: string) => {
    setTasks(tasks.filter(t => t !== taskToRemove));
  };

  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  return (
    <div className='bg-stone-400'>
      <form className="max-w-sm mx-auto flex">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block p-2.5 w-full text-sm mt-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Enter a Task..."
        />
    </form>
    <button onClick={addTask} type="button" className="align-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Task</button>
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Home;