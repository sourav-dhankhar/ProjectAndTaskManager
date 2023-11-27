import React from 'react'

function ProjectsList(props) {
  const handleProjectSelect = (id) => {
    console.log("projectId:: ", id);
    props.onProjectSelect(id);
  }

  return (
    <div className='mt-6 list-none text-white'>
      <li>
        {props.projectsList.map((project) => <ul key={project.id} className='mb-2 text-lg rounded-lg hover:bg-slate-600 px-3 py-2 cursor-pointer' onClick={() => { handleProjectSelect(project.id) }}>{project.title}</ul>)}
      </li>
    </div>
  )
}

export default ProjectsList