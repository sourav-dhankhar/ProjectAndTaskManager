import React from 'react'

function TasksList(props) {
    const taskLength = props?.tasksList?.length ? true : false;
    return (
        <div className='bg-gray-100 rounded-xl'>
            {!taskLength && <p>No tasks are created.</p>}
            {taskLength && <ul className='p-4'>
                {props.tasksList.map((task) => {
                    return (<li key={task.id} className='flex justify-between mb-3'>
                        <span>{task.taskName}</span>
                        <button className='hover:text-red-700' onClick={() => {props.onDeletingTask(task.id)}}>Clear</button>
                    </li>)
                })}
            </ul>}
        </div>
    )
}

export default TasksList