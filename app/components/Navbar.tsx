import React from 'react'
import Image from 'next/image'
import Icon from '../icon.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="z-10 flex items-center gap-12 w-full px-10 py-2 border-b border-grey bg-white z-50 py-2">
        <a href="/" className="flex gap-2 w-24">
            <Image src={Icon} className="" alt='logo' />                    
        </a>
        <ul className='hidden md:flex items-center'>
            <li className="flex gap-2 mr-5">
                <Link href="/">
                    หน้าแรก
                </Link>
            </li>
            <li className="flex gap-2 mr-5">
                <Link href="/">
                    ค้นหาศัพท์
                </Link>
            </li>
            <li className="flex gap-2">
                <Link href="/">
                    ไวยากรณ์
                </Link>
            </li>
        </ul>
                
        

        <div className="hidden md:flex items-center gap-3 md:gap-6 ml-auto">
        <div className='absolute bg-white w-full left-0 top-full mt-0.5 border-grey md:border-b-2 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show'>
            <input 
                type="text"
                placeholder="ค้นหาคำศัพท์"
                className="w-full h-12 md:w-auto bg-grey px-4 py-1 pr-[12%] md:pr-6 placeholder:text-dark-grey"
            />                    
        </div>
            <button className="h-12 bg-grey border-2 hover:bg-black hover:text-white px-3">      
             แจ้งไม่พบข้อมูล
            </button>
        </div>
    </div>
    // <nav className='z-10 sticky top-0 flex items-center gap-12 w-full px-10 py-5 border-b border-grey bg-white z-50'>
    //     <div className='flex shadow-lg'>
    //         <div className='mx-5 my-3'>
    //             <Image src={Icon} alt="Logo" />
    //         </div>
    //         <div className='my-3'>
    //             <input type='text' className='block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
    //             </input>
    //         </div>
    //     </div>
       
    // </nav>
  )
}

export default Navbar