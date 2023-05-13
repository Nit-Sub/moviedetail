import React from 'react';
import error from "../assests/images/404.png"
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='dark:text-white text-5xl my-10 font-bold'>404 , Opps Page Not Found</p>
          <img className="rounded" src={error} alt="Error" />
        </div>
        <div className='flex justify-center my-4' >
          <Link to="/">
          <button className='crusor:pointer dark:text-white text-xl w-24 rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>Home</button>
          </Link>
        </div>

      </section>
    </>
  )
}
