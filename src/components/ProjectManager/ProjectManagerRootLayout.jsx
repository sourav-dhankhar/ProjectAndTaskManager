import React, { useRef } from 'react'

function ProjectManagerRootLayout(props) {
    const titleRef = useRef();
    const decriptionRef = useRef();
    const dateRef = useRef();

    const handleProjectSave = () => {
        console.log("title, decription, date:: ", titleRef.current.value, " ", decriptionRef.current.value, " ", dateRef.current.value);
        props.onSavingProject({
            title: titleRef.current.value,
            description: decriptionRef.current.value,
            date: dateRef.current.value
        })
        titleRef.current.value = "";
        decriptionRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <div className='w-[34rem]'>
            <section className='flex justify-end w-100'>
                <button className='mr-2 px-3 py-2 hover:bg-stone-100 rounded-lg'>Cancel</button>
                <button className='bg-slate-900 px-5 py-2 hover:bg-slate-600 text-white rounded-lg' onClick={handleProjectSave}>Save</button>
            </section>
            <div className='w-100 m-4'>
                <div className='flex flex-col mb-4'>
                    <label className='uppercase'>Title</label>
                    <input ref={titleRef} type='text' className='bg-stone-300 border-2 outline-none border-b-4 border-b-slate-800 rounded-lg focus:ring-slate-800 focus:border-slate-800 p-2.5' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='uppercase '>Description</label>
                    <textarea ref={decriptionRef} type="text" className='bg-stone-300 border-2 outline-none border-b-4 border-b-slate-800 rounded-lg focus:ring-slate-800 focus:border-slate-800 p-2.5' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase'>Due Date</label>
                    <input ref={dateRef} type='date' className='bg-stone-300 border-2 outline-none border-b-4 border-b-slate-800 rounded-lg focus:ring-slate-800 focus:border-slate-800 p-2.5' />
                </div>
            </div>
        </div>
    )
}

export default ProjectManagerRootLayout