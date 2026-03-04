import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-gray-50 rounded-lg shadow-lg p-4'>
      <div className='px-2 sm:pl-14 py-3'>
        <Link href='http://localhost:3008/'>
        <Image 
          src={assets.flavorfusion} 
          width={235} 
          height={100} // Set a height for better aspect ratio
          alt='Flavor Fusion Logo' 
          className='object-contain' // Maintain aspect ratio and prevent distortion
        />
        </Link>
      </div>
      <div className='w-28 sm:w-80 h-[100vh] relative py-12'>
        <div className='w-[50%] sm:w-[80%] absolute right-0'>
          <Link href='/admin/addProduct' className='mt-4 flex items-center border border-transparent gap-3 font-medium px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-gray-100'>
            <Image src={assets.add_icon} alt='' width={28} className='w-6 h-6' />
            <p>Add Blogs</p>
          </Link>
          <Link href='/admin/blogList' className='mt-5 flex items-center border border-transparent gap-3 font-medium px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-gray-100'>
            <Image src={assets.blog_icon} alt='' width={28} className='w-6 h-6' />
            <p>Blog List</p>
          </Link>
          <Link href='/admin/subscription' className='mt-5 flex items-center border border-transparent gap-3 font-medium px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-gray-100'>
            <Image src={assets.email_icon} alt='' width={28} className='w-6 h-6' />
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
