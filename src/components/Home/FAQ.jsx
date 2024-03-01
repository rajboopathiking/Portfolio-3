import React from 'react'

export default function FAQ() {
    return (
        <div>
            <h1 className='text-center bg-base-200 font-bold text-2xl p-10'>FAQ</h1>
            <div className="collapse collapse-plus bg-base-200 ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold text-start">
                    Where Projects Source Code available ?
                </div>
                <div className="collapse-content text-center">
                    <div>
                        <p className='w-[800px] text-center'><span className='font-bold text-lg px-2'>Github</span>.GitHub is a platform for hosting and collaborating on code projects, facilitating version control and team collaboration in software development. </p>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold ">
                    What are my Specilization ?
                </div>
                <div className="collapse-content text-center">
                    <div>
                        <p className='w-[800px] teext-center p-2'><span className='font-bold text-xl'>Machine Learning</span>. Machine Learning part of AI and DataScience. It is Process of Making Machine to Learning  form data.for future upcoming data, it make a prediction without human inference</p>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">
                    What's my biggest acheivement recently done?
                </div>
                <div className="collapse-content text-center">
                    <div>
                        <p className='w-[800px]'><span className='font-bold text-xl'>TCS ION NPT</span>.
TCS iON NPT is a nation-wide assessment for jobseekers and working professionals who want to test their knowledge and skills, and get certified in a specific area of expertise. <span className='font-bold'>I got a Certificate as TCS ION NPT - Machine Learning Pro Certificate</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
