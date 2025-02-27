//- Create a separate child component (e.g., TaskList) to display the list of tasks.
import React from 'react';

interface TaskListProps {   
  tasks: string[];
  removeTask: (task: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks = [], removeTask }) => {
  return (
    <>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg max-w-2xl mx-auto">
        <h1 className='text-center'>To-Do</h1>
        <ul className="list-none">  
        {tasks.map((task, index) => (
          <li //- Display all taskss in a list format.
            key={index} 
            className="flex justify-between items-center odd:bg-white border-b border-gray-200 px-6 py-4">
            <span className="font-medium text-gray-900 whitespace-nowrap">
                {task}
            </span>
            <button  //- Add a "Remove" button next to each task to delete it from the list.
              className="self-align-right font-medium text-red-600 dark:text-red-500 hover:underline"
              onClick={() => removeTask(index)} //- Implement functionality to allow the child component to call a parent function (passed via props) to update the parent state (e.g., removing a task).
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