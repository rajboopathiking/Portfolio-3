import React from 'react'
import Image1 from '../../../public/Image-1.jpg'
import Image2 from '../../../public/Image-2.jpg'
import Image3 from '../../../public/Image-3.jpg'

export default function Projects() {
  return (

    <>
      <h1 className='text-[50px] font-bold text-center p-10'>Projects</h1>
      <section className='h-[500px] overflow-hidden' id='Projects'>

        <div className='flex gap-10 justify-center items-center shadow-orange-300'>
          <div className=' shadow-lg'>
            <div className='  h-[200px] w-[300px] bg-black shadow-lg text-center'>
              <div className=' shadow-lg '>
                <img className='w-[300px] h-[200px]' src={Image1} alt="" />
              </div>
              <div className='relative py-10 shadow-lg border'>
                <h1 className='font-bold text-[red] '>User Classification</h1>
                <p className='w-[300px] text-start  p-2' >Our goal to predict will student purchase course or not Based On the Data which collected from 365 datascience Education platform.</p>
                <div className='flex  items-center justify-end gap-[2px] px-2 text-blue w-[100px] absolute left-[200px] bottom-2'>
                  <button className='relative top-1  w-[100px] rounded  '><a href="/page2" target='/blank'><ion-icon size='large' name="arrow-forward-circle-outline"></ion-icon></a></button>

                </div>

              </div>
            </div>

          </div>
          <div className=' shadow-lg'>
            <div className='  h-[200px] w-[300px] bg-black shadow-lg text-center'>
              <div className=' shadow-lg '>
                <img className='w-[300px] h-[200px]' src={Image2} alt="" />
              </div>
              <div className='relative py-10 shadow-lg border'>
                <h1 className='font-bold text-[red] '>Recommended System</h1>
                <p className='w-[300px] text-start  p-2' >Kaggle's database recommendation system suggests datasets based on user preferences and past interactions, enhancing data discovery and analysis.</p>
                <div className='flex  items-center justify-end gap-[2px] px-2 text-blue w-[100px] absolute left-[200px] bottom-2'>
                  <button className='relative top-1  w-[100px] rounded '><a href="/page3" target='/blank'><ion-icon size='large' name="arrow-forward-circle-outline"></ion-icon></a></button>

                </div>

              </div>
            </div>

          </div>
          <div className=' shadow-lg'>
            <div className='  h-[200px] w-[300px] bg-black shadow-lg text-center'>
              <div className=' shadow-lg '>
                <img className='w-[300px] h-[200px]'  src={Image3} alt="" />
              </div>
              <div className='relative py-10 shadow-lg border'>
                <h1 className='font-bold text-[red] '>Real-Estate Price Prediction</h1>
                <p className='w-[300px] text-start  p-2' >Real estate price prediction utilizes machine learning to forecast property values, aiding buyers, sellers, and investors in making informed decisions.</p>
                <div className='flex  items-center justify-end gap-[2px] px-2 text-blue w-[100px] absolute left-[200px] bottom-2'>
                  <button className=' relative top-1  w-[100px] rounded '><a href="https://portfolio-project-1.onrender.com" target='/blank'><ion-icon size='large' name="arrow-forward-circle-outline"></ion-icon></a></button>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>


  )
}
