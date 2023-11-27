import { useRef, useState } from "react";
import SidebarRootLayout from "./components/Sidebar/SidebarRootLayout";
import TaskManagerRootLayout from "./components/TaskManager/TaskManagerRootLayout";
import ProjectManagerRootLayout from "./components/ProjectManager/ProjectManagerRootLayout";

function App() {
  const [projectsData, setprojectsData] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  const handleAddTask = (taskName) => {
    setprojectsData((prevList) => {
      return (
        {
          selectedProject: prevList.selectedProject,
          projects: [...prevList.projects],
          tasks: [...prevList.tasks, {
            projectId: prevList.selectedProject,
            id: Math.random(),
            taskName: taskName
          }]
        }
      )
    })
  }

  const handleDeletingTask = (taskId) => {
    setprojectsData((prevList) => {
      return ({
        ...prevList,
        selectedProject: prevList.selectedProject,
        projects: [...prevList.projects],
        tasks: prevList.tasks.filter((taskData) => taskData.id !== taskId)
      })
    })
  }

  const handleAddProjectLayout = () => {
    setprojectsData((prevList) => {
      return ({
        selectedProject: undefined,
        projects: [...prevList.projects],
        tasks: [...prevList.tasks]
      })
    })
  }

  const handleDeleteProject = () => {
    setprojectsData((prevList) => {
      return ({
        ...prevList,
        selectedProject: undefined,
        projects: prevList.projects.filter((projectData) => projectData.id !== projectsData.selectedProject),
        tasks: prevList.tasks.filter((taskData) => taskData.projectId !== projectsData.selectedProject)
      })
    })
  }


  const handleSelectProject = (id) => {
    console.log('handleSelectProject:: ', id);
    setprojectsData((prevList) => {
      return ({
        selectedProject: id,
        projects: [...prevList.projects],
        tasks: [...prevList.tasks]
      })
    })
  }

  const handleAddProject = (projectData) => {
    console.log('handleAddProject:: ', projectData);
    setprojectsData((prevList) => {
      return (
        {
          selectedProject: prevList.selectedProject,
          projects: [...prevList.projects, {
            id: Math.random(),
            ...projectData
          }],
          tasks: [...prevList.tasks]
        }
      )
    })
  }

  console.log("projectsData:: ", projectsData);

  const selectedProjectData = projectsData.projects.find((project) => project.id == projectsData.selectedProject);

  const selectedTasksData = projectsData.tasks.filter((task) => task.projectId == projectsData.selectedProject);

  return (
    <>
      <div className="h-screen pt-10 flex flex-row">
        <SidebarRootLayout projectsData={projectsData} onAddProjectLayout={handleAddProjectLayout} onSelectingProject={handleSelectProject} />
        {projectsData.selectedProject != undefined && selectedProjectData ? <TaskManagerRootLayout handleAddTask={handleAddTask} projectData={selectedProjectData} tasksList={selectedTasksData} onDeletingProject={handleDeleteProject} onDeletingTask={handleDeletingTask} /> : <ProjectManagerRootLayout onSavingProject={handleAddProject} />}
      </div>
    </>
  );
}

export default App;
