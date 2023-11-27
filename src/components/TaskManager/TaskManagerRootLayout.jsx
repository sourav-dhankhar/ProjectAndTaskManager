import React from 'react'
import TaskInfo from './TaskInfo'
import CreateTask from './CreateTask'
import TasksList from './TasksList'

function TaskManagerRootLayout(props) {
  return (
    <section className='m-10 w-[34rem]'>
        <TaskInfo projectData={props.projectData} onDeletingProject={props.onDeletingProject}/>
        <CreateTask handleAddTask={props.handleAddTask}/>
        <TasksList onDeletingTask={props.onDeletingTask} tasksList={props.tasksList}/>
    </section>
  )
}

export default TaskManagerRootLayout