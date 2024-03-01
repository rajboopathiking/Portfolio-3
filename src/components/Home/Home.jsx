import React, { useState } from 'react';

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const handleMenu = () => {
    setSidebar(!sidebar);
  };

  return (

    <div>
      <div className='flex justify-between px-10 py-3 shadow-lg w-full fixed'>
        <div>
          <a href="https://github.com/rajboopathiking/User-classification" target='/blank'><ion-icon size='large' name="logo-github"></ion-icon></a>
        </div>
        <ul className='flex gap-10'>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      <div className="hero min-h-screen py-2 bg-gradient-to-tr from-red-300 to-blue-300">

        <div></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-[black]">Portfolio</h1>
            <p className="mb-5 text-[black]">Collection of Deployed Projects. It Help To Various Project Development (API Documents also Provided)</p>
            <button className="btn btn-primary"><a href="#skills">Get Started</a></button>
          </div>
        </div>
      </div>
    </div>

  )
}
