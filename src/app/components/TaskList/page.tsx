import React from 'react';

interface TaskListProps {
  tasks: string[];
  removeTask: (task: string) => void;
}
// - Create a separate child component (e.g., TaskList) to display the list of tasks.
const TaskList: React.FC<TaskListProps> = ({ tasks = [], removeTask }) => {
  return (
    <>
    
        <div className="bg-stone-400 relative overflow-x-auto shadow-md sm:rounded-lg max-w-md mx-auto">
        <ul className="list-none">  
        {tasks.map((task, index) => (
          <li //- Display all taskss in a list format.
            key={index} 
            className="flex justify-between items-center odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 px-6 py-4">
                <span className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {task}
                </span>
                <button  //- Add a "Remove" button next to each task to delete it from the list.
                className="self-align-right font-medium text-red-600 dark:text-red-500 hover:underline"
                onClick={() => removeTask(task)} //Pass the list of tasks as a prop from the parent component to the child component.
                >
                Remove
                </button>
          </li>
        ))}
      </ul>
        </div>

    </>
    
  );
};

export default TaskList;