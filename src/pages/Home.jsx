import { useState, useEffect } from 'react'
import homePicture from '../assets/home-picture.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='flex items-center bg-slate-100 p-12 dark:bg-gray-900'>
                <div className='flex-1'>
                    <p className='text-5xl leading-[70px] dark:text-white'>
                        Récupérez vos besoins,<br />
                        on s'occupe du reste,<br />
                        avec les meilleurs<br />
                        talents
                    </p>
                    <p className='mt-10'>
                        <Link to="/survey/1" className='bg-blue-700 px-12 py-2 text-white rounded-full'>Faire le test </Link>
                    </p>

                </div>
                <figure className='flex-1'>
                    <img src={homePicture} alt="" />
                </figure>
            </div>
        </>
    )
}

export default Home
