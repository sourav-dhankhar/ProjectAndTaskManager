import React, { useReducer, useRef, useState } from 'react'

function CreateTask(props) {
    const [taskName, setTaskName] = useState("");

    function handleTaskNameChange(event) {
        setTaskName(event.target.value);
    }

    function handleAddTask() {
        props.handleAddTask(taskName);
        setTaskName("");
    }

    return (
        <div>
            <div className='font-bold text-3xl text-stone-800 mb-4'>Tasks</div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-2/3 mr-4">
                    <input value={taskName} onChange={handleTaskNameChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-stone-800" id="inline-full-name" type="text" />
                </div>
                <div>
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        <button className='hover:bg-slate-100 p-2 rounded-lg' onClick={handleAddTask}>Add Task</button>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CreateTask