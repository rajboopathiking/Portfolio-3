import React from 'react'
import projectImage1 from '../../../public/projectImage1.jpg'

export default function Hero() {
    return (
        <div className='relative bottom-20 z-0 ' id='home'>
            <div>
                <img src={projectImage1} alt="" />
            </div>
            <div className="hero min-h-screen absolute top-0 backdrop-blur-[5px] ">
                <div className="hero-content text-center">
                    <div className="max-w-md flex justify-center flex-col items-center p-10 ">
                        <h1 className="text-5xl font-bold "> <span className='mx-10 font-bold text-[red]'>User</span><span className='text-[blue]'>Classification</span></h1>
                        <p className="py-6">Data related to online Education Platform . actually it provide best courses. they provide few minutes of course content free. but many contents are paid . but price is affordable. so, our goal to predict will student purchase course or not based on Data.</p>
                        <button className="btn btn-primary"><a href="#code">Get Started</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
