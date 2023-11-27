import React from 'react'

function TaskInfo(props) {
    return (
        <>
            <div className='text-black text-xl'>
                <div className='flex justify-between align-middle text-stone-800'>
                    <span className="font-bold text-4xl">Test</span>
                    <button className='text-sm hover:text-red-700' onClick={props.onDeletingProject}>Delete</button>
                </div>
                <span className='block mt-4 text-base text-stone-500'>{props?.projectData?.date}</span>
                <p className='block mt-4 text-base text-stone-800'>{props?.projectData?.title}</p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </>
    )
}

export default TaskInfo