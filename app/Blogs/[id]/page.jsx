'use client';
import { assets } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import GetStarted from '@/Components/GetStarted';
import Social from '@/Components/Social';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Save from './Save';

const Page = () => {
    const params = useParams(); // Use the useParams hook to get params
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        try {
            const response = await axios.get('/api/blog', { params: { id: params.id } });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, [params.id]); // Ensure to re-fetch if params.id changes

    return (
        data ? (
            <>
                <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                    <div className='flex justify-between items-center'>
                        <Link href='/'>
                            <Image src={assets.flavorfusion} width={180} alt='' className='w-[130px] sm:w-auto' />
                        </Link>
                        
                        <div className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6'>
                          <Link href='http://localhost:3008/admin/addProduct'>
                            <GetStarted />
                          </Link>
                        </div>
                    </div>
                    <div className='text-center my-24'>
                        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='' />
                        <p className='mt-1 pb-2 text-large max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mx-5 max-w-[840px] md:mx-auto mt-[-100px] mb-10'>
                    <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
                    
                    {/* Ingredients Section */}
                    <h1 className='text-xl font-bold mt-8'>Ingredients</h1>
                    <div 
                        className='blog-content text-justify leading-relaxed' 
                        dangerouslySetInnerHTML={{ __html: data.description }} 
                    ></div>

                    {/* Procedure Section */}
                    <h1 className='text-xl font-bold mt-8'>Procedure</h1>
                    <div 
                        className='blog-content text-justify leading-relaxed' 
                        dangerouslySetInnerHTML={{ __html: data.procedure }} 
                    ></div>

                    {/* Video Section with Autoplay and Rounded Corners */}
                    {data.ref ? (
                        <div className="video-container mb-8 flex justify-center">
                            <iframe 
                                width="560" 
                                height="315" 
                                src={`${data.ref}?autoplay=1&mute=1`} // Autoplay and mute for autoplay to work on most browsers
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                                title="YouTube Video"
                            ></iframe>
                        </div>
                    ) : null}

                    {/* Centered Save Button */}
                    <div className='mb-8'><Save/></div>

                    {/* Centered Social Links */}
                    <div className='mb-8'><Social /></div>
                    
                    {/* Additional content */}
                </div>
                <Footer/>
            </>
        ) : null
    );
};

export default Page;
