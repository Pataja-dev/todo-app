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
    <div className=''>
      <div className="grid-cols-6">
      <form className="max-w-md mx-auto">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block p-2.5 w-full text-sm mt-10 text-gray-900 bg-stone-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:bg-stone-200" 
          placeholder="Enter a Task..."
        />
    <button onClick={addTask} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>
    </form>
      </div >
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Home;