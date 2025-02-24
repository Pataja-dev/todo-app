





"use client"
import { useState, useEffect } from 'react';
import TaskList from '@/app/components/TaskList';

const Home = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask(''); //     - Clear the input field after adding the task.
    setIsClick(true);
  };
    const removeTask = (taskToRemove: string) => {
      const updatedTasks = tasks.filter(t => t !== taskToRemove);
      setTasks(updatedTasks);
      if (updatedTasks.length === 0) {
        setIsClick(false);
    }
      
    };

  
  useEffect(() => { // - Use the useEffect hook to log a message to the console whenever the list of tasks changes.
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  return (
    <div className='pt-52'>
      <div className="grid-cols-6 mb-10">
      <form className="max-w-2xl mx-auto flex">
        <input //  - Create an input field for users to type a task.
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block p-2.5 w-full text-sm mt-10 text-gray-900 bg-stone-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:bg-stone-200" 
          placeholder="Enter a Task..."
        />
        
      <button // - Add a button labeled "Add Task" to add the task to a list.
        onClick={addTask} 
        type="button" 
        className="sm:h-[60px] h-60 mt-10  sm:mt-10 ml-4 sm:ml-4 w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
          Add Task
      </button>

    </form>
      </div >
      {isClick && <TaskList //added some conditional rendering
      tasks={tasks} //- Pass the list of tasks as a prop from the parent component to the child component.
      removeTask={removeTask} //- Pass the state and any necessary functions (e.g., removeTask) from the parent component to the child component as props.
      />  }
    </div>
  );
};

export default Home;