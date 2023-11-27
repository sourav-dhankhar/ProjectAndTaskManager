import React from 'react'

function Addprojects(props) {
  return (
    <div className='mt-4'>
        <h1 className='text-2xl text-white uppercase'>Your Projects</h1>
        <button className='mt-4 bg-stone-700 hover:bg-stone-500 text-white p-2 rounded-lg' onClick={props.onAddProjectLayout}>+Add Project</button>
    </div>
  )
}

export default Addprojects