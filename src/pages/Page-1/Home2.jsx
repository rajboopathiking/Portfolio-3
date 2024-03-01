import React, { useState } from 'react'
import '../../App.css'
export default function Page2Home() {
    const [sidebar, setSidebar] = useState(false);

  const handleMenu = () => {
                setSidebar(!sidebar);}
    return (
        <div>
            <div>
                <div className='flex justify-between items-center px-5 relative z-10    '>
                    <div >
                        <a href="/" id='hometitle' className='text-[purple] hover:text-[white]'>Home</a>
                    </div>
                    <div className="lg:hidden hover:text-[white]" >
                        <ion-icon onClick={handleMenu} size='large' name="menu-outline"></ion-icon>
                    </div>
                    <div className='md:hidden'>
                        <ul className='flex gap-10 m-5 '>
                            <a href="https://github.com/rajboopathiking/User-classification" target='/blank'><ion-icon size='large' name="logo-github"></ion-icon></a>
                        </ul>
                    </div>
                </div>
                <div>
                    {sidebar ? (
                        <ul className='flex flex-col gap-10 justify-start items-center shadow-2xl pt-10 h-[100vh] w-[150px]'>
                            <ion-icon size='large' name="logo-github"></ion-icon>
                        </ul>


                    ) : (
                        <div></div>
                    )}
                </div>
            </div>

        </div>
    )
}
