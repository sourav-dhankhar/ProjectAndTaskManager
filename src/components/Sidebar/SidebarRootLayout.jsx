import React from 'react'
import Addprojects from './Addprojects'
import ProjectsList from './ProjectsList'

function SidebarRootLayout(props) {
    return (
        <aside className="bg-slate-900 w-1/4 h-screen p-10 rounded-tr-xl">
            <Addprojects onAddProjectLayout={props.onAddProjectLayout} />
            <ProjectsList projectsList={props.projectsData.projects} onProjectSelect={(id) => {console.log('sideBarLayout:: ', id); props.onSelectingProject(id)}} />
        </aside>
    )
}

export default SidebarRootLayout