import React from 'react';

interface TaskListProps {
  tasks: string[];
  removeTask: (task: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks = [], removeTask }) => {
  return (
    <>
        <div className="bg-stone-400 relative overflow-x-auto shadow-md sm:rounded-lg max-w-md mx-auto">
            <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Tasks
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                    {task}
                                </th>
                                <td className="px-6 py-4">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => removeTask(task)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    </>
    
  );
};

export default TaskList;