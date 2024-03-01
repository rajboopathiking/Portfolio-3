import React from 'react'

export default function About() {
  return (
    <div className='p-5 my-[100px] relative top-20 w-full bg-gradient-to-r from-purple-500 to-orange-500' id='About'>
      <div className='  p-10 text-white flex justify-between'>
        <div className='w-[500px] flex'>
        <p>I Have Knowledge In Artificial Intelligence and FullStack Development.If You Interested In My Profile.Contact Me.Hire Me</p>
        </div>
        <button  className='bg-[black] text-white  rounded-lg w-[100px] h-10'><a href="#Contact">Hire</a></button>
      </div>
    </div>

  )
}
