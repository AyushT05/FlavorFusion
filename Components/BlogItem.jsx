import { assets, blog_data } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = ({ title, description,procedure, category, image, id }) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <Link href={`/Blogs/${id}`}>
          <Image src={image} alt='' width={400} height={400} className='border-b border-black' />
        </Link>
      </div>
      <div className="p-6">
        <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block text-base font-light leading-relaxed text-inherit antialiased" dangerouslySetInnerHTML={{__html:description.slice(0,120)}}>
          
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/Blogs/${id}`}>
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-[#ff3333] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BlogItem;
