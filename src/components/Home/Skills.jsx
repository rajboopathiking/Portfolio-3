import React from 'react'

export default function Skills() {
    return (
        <>
            <h1 className='text-center font-bold text-[50px] relative top-20' id='skills'>Skill</h1>
            <div className='overflow-clip p-10'>
                <div className='flex gap-10 m-20 justify-center' id='s-1'>
                    <p className='p-2 px-5 rounded-[20px] shadow-xl'>Python</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-xl'>Css</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-xl'>Html</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-xl'>JavaScript</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-xl'>Flask</p>
                </div>
                <div className='flex gap-10 m-20 justify-center' id='s-2'>
                    <p className='p-2 px-5 rounded-[20px] shadow-lg'>Data Science</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-lg'>Machine Learning</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-lg'>Analysis</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-lg'>Web development</p>
                    <p className='p-2 px-5 rounded-[20px] shadow-lg'>Cloud</p>
                </div>
            </div>
        </>

    )
}
